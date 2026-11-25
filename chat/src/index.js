// Meridel AI: answers supply chain, logistics and data questions for visitors
// of merideladvisory.com. Only the website may call it, each visitor is rate
// limited, and nothing is stored.

const ALLOWED = ['https://merideladvisory.com', 'https://www.merideladvisory.com', 'http://localhost:4321'];
const MAX_TURNS = 10;
const MAX_CHARS = 1000;

const SYSTEM = `You are Meridel AI, the assistant on the website of Meridel Advisory, an independent supply chain consultancy. Meridel Advisory is a small team of supply chain, finance and data specialists working from Warsaw and Baku with companies that trade across Europe, the Caucasus, Central Asia and China.

Meridel Advisory's services:
- Transport and corridors: choosing modes (sea, river, rail, road, multimodal) and routes from Europe to China, including the Middle Corridor.
- Warehouse network and location studies.
- Inventory: ABC-XYZ segmentation, safety stock and stock policies.
- Cost to serve: the real profit of each customer, product and channel.
- Logistics carbon emissions: calculation and reporting.
- Data analysis, dashboards and automated reporting (Excel, Power Query, Alteryx, Tableau, Power BI, SQL, Python), plus workshops and training.
Meridel Advisory is independent: it does not sell freight, storage or software.

How to answer:
- Help with questions about supply chain, logistics, transport, warehousing, inventory, procurement, cost to serve, emissions, and data analytics or dashboards. Simple general business questions are fine too.
- Be practical, clear and short: usually under 170 words. Use a short list or a simple formula with a small example when it helps.
- Do not invent statistics, prices, transit times, laws or regulations. When you give typical ranges, say they vary. If you are not sure, say so.
- For questions about a visitor's own company, data or decisions, give general guidance and suggest a free 30-minute call: https://merideladvisory.com/contact
- Politely decline anything unrelated to these topics, and anything harmful or illegal.
- Do not ask for personal data. Do not claim to be human. Do not name Meridel's clients or partners.
- Reply in the language the visitor writes in, for example Azerbaijani, English, Russian, Turkish or Polish.`;

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

function corsFor(origin) {
  return {
    'Access-Control-Allow-Origin': ALLOWED.includes(origin) ? origin : ALLOWED[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

/** Text of a Workers AI reply, whichever response shape the model uses. */
export function replyText(out) {
  const raw =
    out?.choices?.[0]?.message?.content ??
    out?.response ??
    (typeof out === 'string' ? out : '');
  const text = Array.isArray(raw) ? raw.map((p) => p?.text ?? '').join('') : String(raw ?? '');
  // Some models can include their reasoning; visitors only see the answer.
  return text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
}

export function cleanMessages(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') ?? '';
    const cors = corsFor(origin);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
    if (!ALLOWED.includes(origin)) return json({ error: 'origin' }, 403, cors);

    if (env.LIMITER) {
      const key = request.headers.get('CF-Connecting-IP') ?? 'unknown';
      const { success } = await env.LIMITER.limit({ key });
      if (!success) return json({ error: 'rate' }, 429, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'bad-request' }, 400, cors);
    }
    const messages = cleanMessages(body?.messages);
    if (!messages.length || messages[messages.length - 1].role !== 'user') {
      return json({ error: 'bad-request' }, 400, cors);
    }

    try {
      const out = await env.AI.run(env.MODEL, {
        messages: [{ role: 'system', content: SYSTEM }, ...messages],
        max_completion_tokens: 700,
        max_tokens: 700,
        temperature: 0.4,
      });
      const reply = replyText(out);
      if (!reply) return json({ error: 'empty' }, 502, cors);
      return json({ reply }, 200, cors);
    } catch (err) {
      // The free daily allowance runs out with an error, not a bill.
      const msg = String(err?.message ?? err);
      const quota = /neuron|quota|limit|exceeded|capacity|429/i.test(msg);
      console.error('AI error', msg);
      return json({ error: quota ? 'quota' : 'ai' }, quota ? 503 : 502, cors);
    }
  },
};
