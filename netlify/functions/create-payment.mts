import crypto from "node:crypto";
import type { Context, Config } from "@netlify/functions";

type Product = { name: string; price: number; count: number };
type OrderPayload = {
  orderRef: string;
  products: Product[];
  clientFirstName?: string;
  clientLastName?: string;
  clientEmail?: string;
  clientPhone?: string;
};

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

  console.log("[create-payment] env:", {
    merchantAccount: merchantAccount ? "SET" : "MISSING",
    merchantDomain,
    secretKey: secretKey ? `SET(len=${secretKey.length})` : "MISSING",
    siteUrl,
  });

  if (!merchantAccount || !secretKey) {
    return new Response(
      JSON.stringify({ error: "WFP env not configured", merchantAccount: !!merchantAccount, secretKey: !!secretKey }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let payload: OrderPayload;
  try {
    payload = (await req.json()) as OrderPayload;
  } catch (err) {
    console.error("[create-payment] invalid JSON:", err);
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log("[create-payment] payload:", { orderRef: payload.orderRef, products: payload.products?.length });

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

  try {
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
    console.log("[create-payment] signature:", { amount, sigPrefix: signature.substring(0, 8) });

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
<title>WayForPay...</title>
</head>
<body>
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
<noscript><button type="submit">Оплатити</button></noscript>
</form>
<script>document.getElementById('wfp').submit();</script>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    console.error("[create-payment] error:", err);
    return new Response(
      JSON.stringify({ error: "Server error", message: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { "
