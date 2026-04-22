import crypto from "node:crypto";
import type { Context, Config } from "@netlify/functions";

/**
 * WayForPay Purchase — створення платіжної сесії.
 * POST /api/create-payment з JSON:
 *   { orderRef, products: [{name, price, count}], clientFirstName, clientLastName, clientEmail, clientPhone }
 * Відповідь: HTML з прихованою формою і auto-submit на https://secure.wayforpay.com/pay
 */

type Product = { name: string; price: number; count: number };
type OrderPayload = {
  orderRef: string;
  products: Product[];
  clientFirstName?: string;
  clientLastName?: string;
  clientEmail?: string;
  clientPhone?: string;
};

// HMAC_MD5 підпис за документацією WayForPay (https://wiki.wayforpay.com/view/852102)
function buildSignature(
  merchantAccount: string,
  merchantDomain: string,
  orderRef: string,
  orderDate: number,
  amount: string,
  currency: string,
  products: Product[],
  secretKey: string,
): string {
  const parts: string[] = [
    merchantAccount,
    merchantDomain,
    orderRef,
    String(orderDate),
    amount,
    currency,
    ...products.map((p) => p.name),
    ...products.map((p) => String(p.count)),
    ...products.map((p) => String(p.price)),
  ];
  const baseString = parts.join(";");
  return crypto.createHmac("md5", secretKey).update(baseString, "utf8").digest("hex");
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const merchantAccount = Netlify.env.get("WFP_MERCHANT_ACCOUNT");
  const merchantDomain = Netlify.env.get("WFP_MERCHANT_DOMAIN") || "goldix.com.ua";
  const secretKey = Netlify.env.get("WFP_SECRET_KEY");
  const siteUrl = Netlify.env.get("WFP_SITE_URL") || "https://goldix.com.ua";

  if (!merchantAccount || !secretKey) {
    return new Response(
      JSON.stringify({ error: "WFP_MERCHANT_ACCOUNT або WFP_SECRET_KEY не налаштовано" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let payload: OrderPayload;
  try {
    payload = (await req.json()) as OrderPayload;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!payload.orderRef || !Array.isArray(payload.products) || payload.products.length === 0) {
    return new Response(JSON.stringify({ error: "Missing orderRef or products" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const orderDate = Math.floor(Date.now() / 1000);
  const amount = payload.products
    .reduce((s, p) => s + Number(p.price) * Number(p.count), 0)
    .toFixed(2);
  const currency = "UAH";

  const signature = buildSignature(
    merchantAccount,
    merchantDomain,
    payload.orderRef,
    orderDate,
    amount,
    currency,
    payload.products,
    secretKey,
  );

  // Формуємо HTML з auto-submit формою — браузер миттєво редиректить на WFP
  const productNameInputs = payload.products
    .map((p) => `<input type="hidden" name="productName[]" value="${escapeHtml(p.name)}"/>`)
    .join("\n");
  const productPriceInputs = payload.products
    .map((p) => `<input type="hidden" name="productPrice[]" value="${p.price}"/>`)
    .join("\n");
  const productCountInputs = payload.products
    .map((p) => `<input type="hidden" name="productCount[]" value="${p.count}"/>`)
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Перенаправлення на WayForPay...</title>
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;background:#f5f5f7;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;color:#1d1d1f;text-align:center}
  .box{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.08);max-width:420px}
  h1{font-size:22px;margin:0 0 10px}
  p{color:#6e6e73;margin:0 0 20px;font-size:15px}
  .spinner{width:40px;height:40px;border:3px solid #f5f5f7;border-top-color:#d4a017;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 20px}
  @keyframes spin{to{transform:rotate(360deg)}}
  button{padding:12px 24px;background:#d4a017;color:#fff;border:none;border-radius:980px;font-size:15px;font-weight:600;cursor:pointer}
</style>
</head>
<body>
<div class="box">
<div class="spinner"></div>
<h1>Переходимо до оплати</h1>
<p>Зараз ви будете перенаправлені на захищену сторінку WayForPay...</p>
<form id="wfp" method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
<input type="hidden" name="merchantAccount" value="${escapeHtml(merchantAccount)}"/>
<input type="hidden" name="merchantAuthType" value="SimpleSignature"/>
<input type="hidden" name="merchantDomainName" value="${escapeHtml(merchantDomain)}"/>
<input type="hidden" name="merchantTransactionSecureType" value="AUTO"/>
<input type="hidden" name="merchantSignature" value="${signature}"/>
<input type="hidden" name="language" value="UA"/>
<input type="hidden" name="returnUrl" value="${siteUrl}/payment-result"/>
<input type="hidden" name="serviceUrl" value="${siteUrl}/api/wfp-callback"/>
<input type="hidden" name="orderReference" value="${escapeHtml(payload.orderRef)}"/>
<input type="hidden" name="orderDate" value="${orderDate}"/>
<input type="hidden" name="amount" value="${amount}"/>
<input type="hidden" name="currency" value="${currency}"/>
${productNameInputs}
${productPriceInputs}
${productCountInputs}
${payload.clientFirstName ? `<input type="hidden" name="clientFirstName" value="${escapeHtml(payload.clientFirstName)}"/>` : ""}
${payload.clientLastName ? `<input type="hidden" name="clientLastName" value="${escapeHtml(payload.clientLastName)}"/>` : ""}
${payload.clientEmail ? `<input type="hidden" name="clientEmail" value="${escapeHtml(payload.clientEmail)}"/>` : ""}
${payload.clientPhone ? `<input type="hidden" name="clientPhone" value="${escapeHtml(payload.clientPhone)}"/>` : ""}
<input type="hidden" name="defaultPaymentSystem" value="card"/>
<noscript><button type="submit">Перейти до оплати</button></noscript>
</form>
<script>document.getElementById('wfp').submit();</script>
</div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};

export const config: Config = {
  path: "/api/create-payment",
};
