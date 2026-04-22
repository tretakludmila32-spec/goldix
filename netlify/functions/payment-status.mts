import type { Context, Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

/**
 * Повертає статус платежу за orderRef.
 * Використовується на сторінці /payment-result щоб показати покупцю результат.
 * GET /api/payment-status?orderRef=GOLDIX-123456
 */

export default async (req: Request, _context: Context) => {
  const url = new URL(req.url);
  const orderRef = url.searchParams.get("orderRef");

  if (!orderRef) {
    return new Response(JSON.stringify({ error: "Missing orderRef" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const store = getStore("wfp-payments");
    const data = await store.get(orderRef, { type: "json" });

    if (!data) {
      // callback ще не прийшов — стандартна ситуація, покажемо "pending"
      return new Response(JSON.stringify({ status: "pending", orderRef }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("payment-status error:", err);
    return new Response(JSON.stringify({ error: "Storage error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config: Config = {
  path: "/api/payment-status",
};
