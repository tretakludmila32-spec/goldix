import crypto from "node:crypto";
import type { Context, Config } from "@netlify/functions";

type Product = { name: string; price: number; count: number };

function esc(s: string): string {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export default async (req: Request, _ctx: Context) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  const merchantAccount = Netlify.env.get("WFP_MERCHANT_ACCOUNT");
  const merchantDomain = Netlify.env.get("WFP_MERCHANT_DOMAIN") || "goldix-site.netlify.app";
  const secretKey = Netlify.env.get("WFP_SECRET_KEY");
  const siteUrl = Netlify.env.get("WFP_SITE_URL") || "https://goldix-site.netlify.app";
  console.log("[wfp] env", { merchantAccount: !!merchantAccount, merchantDomain, secretKey: !!secretKey, siteUrl });
  if (!merchantAccount || !secretKey) {
    return new Response(JSON.stringify({ error: "env missing" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
  let payload: any;
  try { payload = await req.json(); } catch { return new Response(JSON.stringify({ error: "bad json" }), { status: 400, headers: { "Content-Type": "application/json" } }); }
  const products: Product[] = payload.products || [];
  if (!payload.orderRef || products.length === 0) return new Response(JSON.stringify({ error: "missing fields" }), { status: 400, headers: { "Content-Type": "application/json" } });
  const orderDate = Math.floor(Date.now() / 1000);
  const amount = products.reduce((s, p) => s + Number(p.price) * Number(p.count), 0).toFixed(2);
  const currency = "UAH";
  const parts = [merchantAccount, merchantDomain, payload.orderRef, String(orderDate), amount, currency];
  products.forEach((p) => parts.push(p.name));
  products.forEach((p) => parts.push(String(p.count)));
  products.forEach((p) => parts.push(String(p.price)));
  const signature = crypto.createHmac("md5", secretKey).update(parts.join(";"), "utf8").digest("hex");
  console.log("[wfp] sig", { amount, sigPrefix: signature.substring(0, 10) });
  const inputs: string[] = [];
  inputs.push('<input type="hidden" name="merchantAccount" value="' + esc(merchantAccount) + '"/>');
  inputs.push('<input type="hidden" name="merchantAuthType" value="SimpleSignature"/>');
  inputs.push('<input type="hidden" name="merchantDomainName" value="' + esc(merchantDomain) + '"/>');
  inputs.push('<input type="hidden" name="merchantTransactionSecureType" value="AUTO"/>');
  inputs.push('<input type="hidden" name="merchantSignature" value="' + signature + '"/>');
  inputs.push('<input type="hidden" name="language" value="UA"/>');
  inputs.push('<input type="hidden" name="returnUrl" value="' + siteUrl + '/payment-result"/>');
  inputs.push('<input type="hidden" name="serviceUrl" value="' + siteUrl + '/api/wfp-callback"/>');
  inputs.push('<input type="hidden" name="orderReference" value="' + esc(payload.orderRef) + '"/>');
  inputs.push('<input type="hidden" name="orderDate" value="' + orderDate + '"/>');
  inputs.push('<input type="hidden" name="amount" value="' + amount + '"/>');
  inputs.push('<input type="hidden" name="currency" value="' + currency + '"/>');
  products.forEach((p) => inputs.push('<input type="hidden" name="productName[]" value="' + esc(p.name) + '"/>'));
  products.forEach((p) => inputs.push('<input type="hidden" name="productPrice[]" value="' + p.price + '"/>'));
  products.forEach((p) => inputs.push('<input type="hidden" name="productCount[]" value="' + p.count + '"/>'));
  if (payload.clientFirstName) inputs.push('<input type="hidden" name="clientFirstName" value="' + esc(payload.clientFirstName) + '"/>');
  if (payload.clientLastName) inputs.push('<input type="hidden" name="clientLastName" value="' + esc(payload.clientLastName) + '"/>');
  if (payload.clientEmail) inputs.push('<input type="hidden" name="clientEmail" value="' + esc(payload.clientEmail) + '"/>');
  if (payload.clientPhone) inputs.push('<input type="hidden" name="clientPhone" value="' + esc(payload.clientPhone) + '"/>');
  inputs.push('<input type="hidden" name="defaultPaymentSystem" value="card"/>');
  const html = '<!DOCTYPE html><html><body><form id="wfp" method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">' + inputs.join("") + '</form><script>document.getElementById("wfp").submit();</script></body></html>';
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
};

export const config: Config = { path: "/api/create-payment" };
