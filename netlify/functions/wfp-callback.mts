import crypto from "node:crypto";
import type { Context, Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

/**
 * WayForPay serviceUrl callback.
 * WFP шле POST з JSON після завершення оплати (будь-який статус).
 * Ми маємо:
 *   1. Перевірити підпис (HMAC_MD5 від merchantAccount;orderReference;amount;currency;authCode;cardPan;transactionStatus;reasonCode)
 *   2. Зберегти статус в Netlify Blobs (щоб потім відобразити на /payment-result)
 *   3. Відповісти WFP з валідним signature, інакше WFP буде ретраїти 4 доби
 */

type WfpCallback = {
  merchantAccount: string;
  orderReference: string;
  merchantSignature: string;
  amount: number;
  currency: string;
  authCode?: string;
  email?: string;
  phone?: string;
  createdDate?: number;
  processingDate?: number;
  cardPan?: string;
  cardType?: string;
  issuerBankCountry?: string;
  issuerBankName?: string;
  recToken?: string;
  transactionStatus: string;
  reason?: string;
  reasonCode?: string | number;
  fee?: number;
  paymentSystem?: string;
};

function verifySignature(data: WfpCallback, secretKey: string): boolean {
  const parts: string[] = [
    data.merchantAccount,
    data.orderReference,
    String(data.amount),
    data.currency,
    String(data.authCode ?? ""),
    String(data.cardPan ?? ""),
    data.transactionStatus,
    String(data.reasonCode ?? ""),
  ];
  const baseString = parts.join(";");
  const expected = crypto.createHmac("md5", secretKey).update(baseString, "utf8").digest("hex");
  return expected === data.merchantSignature;
}

function buildResponseSignature(orderRef: string, status: string, time: number, secretKey: string): string {
  const baseString = `${orderRef};${status};${time}`;
  return crypto.createHmac("md5", secretKey).update(baseString, "utf8").digest("hex");
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const secretKey = Netlify.env.get("WFP_SECRET_KEY");
  if (!secretKey) {
    console.error("WFP_SECRET_KEY не налаштовано");
    return new Response(JSON.stringify({ error: "Server not configured" }), { status: 500 });
  }

  let data: WfpCallback;
  try {
    data = (await req.json()) as WfpCallback;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  // 1. Перевіряємо підпис від WFP (захист від підробки)
  const valid = verifySignature(data, secretKey);
  if (!valid) {
    console.warn("WFP callback: неправильний підпис для", data.orderReference);
    return new Response(JSON.stringify({ error: "Invalid signature" }), { status: 400 });
  }

  // 2. Зберігаємо результат в Netlify Blobs для подальшого відображення
  try {
    const store = getStore("wfp-payments");
    await store.setJSON(data.orderReference, {
      orderReference: data.orderReference,
      amount: data.amount,
      currency: data.currency,
      transactionStatus: data.transactionStatus,
      reason: data.reason,
      reasonCode: data.reasonCode,
      cardPan: data.cardPan,
      cardType: data.cardType,
      paymentSystem: data.paymentSystem,
      email: data.email,
      phone: data.phone,
      processingDate: data.processingDate,
      receivedAt: Date.now(),
    });
  } catch (err) {
    console.error("Помилка збереження в Blobs:", err);
    // не фейлимо — WFP не повинен ретраїти через нашу помилку сховища
  }

  // 3. Відповідаємо WFP підписом — інакше система буде ретраїти 4 доби
  const time = Math.floor(Date.now() / 1000);
  const response = {
    orderReference: data.orderReference,
    status: "accept",
    time,
    signature: buildResponseSignature(data.orderReference, "accept", time, secretKey),
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const config: Config = {
  path: "/api/wfp-callback",
};
