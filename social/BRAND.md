# Meridel Advisory: brand guide for social content

Read this before making any post, story, video or caption. Read `CONTENT-LOG.md` too, so nothing is repeated.

## Who we are

Meridel Advisory is a supply chain and logistics consultancy. We design how goods move; we don't move them. We build the models behind logistics decisions (route and mode, warehouse network, stock, cost to serve, freight emissions) and the dashboards to run them. Founder: Tural Bayramli. Based in Warsaw and Baku; meetings in person or online. Website: https://merideladvisory.com (English) and https://merideladvisory.com/az/ (Azerbaijani).

Slogan: "We find your position. Together, we chart the course." / "Mövqeyinizi müəyyən edirik. İstiqaməti birlikdə qururuq."

Region wording: "from Europe to Asia and the Gulf" / "Avropadan Asiyaya və Körfəzə qədər". Never "from Europe to China" alone: Dubai readers must see themselves in it.

## Services (use these names)

| English | Azerbaijani |
|---|---|
| Transport and corridors | Daşıma və dəhlizlər |
| Networks and warehouses | Şəbəkələr və anbarlar |
| Inventory | Ehtiyat |
| Cost to serve | Xidmət xərci |
| Logistics emissions | Logistika emissiyaları |
| Data analysis and dashboards | Məlumat təhlili və panellər |

Starter offers to mention in posts and messages:

- **Free mini-analysis:** send 12 months of sales by item; within 5 days we send an ABC-XYZ chart and three findings.
- **Stock health check:** ABC-XYZ and safety stock review, showing where cash is stuck.
- **Route and landed-cost comparison** for one trade lane (for example China to Baku, Dubai to Almaty).
- **Cost-to-serve snapshot:** which customers and products lose money after delivery costs.
- **Freight CO₂ baseline** with the GLEC Framework and ISO 14083.
- **Free first call** (20 minutes).

## Audiences and languages

| Market | Who | Language | Main channels |
|---|---|---|---|
| Azerbaijan (Baku) | Owners and directors of distributors, importers, retail chains, food producers, exporters | Azerbaijani first, English underneath | Instagram, WhatsApp, LinkedIn |
| UAE (Dubai) | Traders and distributors shipping to the Caucasus and Central Asia | English | LinkedIn |
| Poland | Companies on China–Europe rail and the Middle Corridor | English (Polish later) | LinkedIn |

Dubai positioning: don't sound like a general consultancy. We are the team that knows the lanes between the Gulf, the Caspian and Central Asia.

## Voice

- Plain, practical and specific. One idea per post. A concrete example or number in every post.
- Talk about money and time: stock tied up, cost per order, transit days, late deliveries.
- No hype words: revolutionize, unlock, game-changer, synergy, cutting-edge, leverage (as a verb).
- Numbers must be defensible. Use ranges ("around 80%"), label examples as examples, and never invent statistics or results.
- No emojis on LinkedIn. At most one or two on Instagram.
- Azerbaijani must read as if written in Azerbaijani, not translated word for word. Use the service names above. Write "Bakı", "Varşava", "Dubay".
- On Tural's personal LinkedIn: first person ("I", "we at Meridel"), as the founder sharing what he sees in practice.

## Never

- Name clients, past or current employers, or the logistics companies and carriers we work with.
- Claim results we can't prove, or show client data.
- Use third-party logos or brand marks, or draw known characters.
- Use photos from anywhere except Pexels (record each in `photos/CREDITS.md`) or our own drawings and charts.
- Use music with lyrics, or tracks registered for copyright claims. Calm instrumentals only.

## Look

- Colours: navy `#14213a`, gold `#c2a574`, ivory `#efe9dd`; light grey-blue `#b9c2d3` and `#9aa6bd` for secondary text. Nothing else.
- Type: Newsreader (headings, big numbers) and IBM Plex Sans (everything else), from `node_modules/@fontsource-variable`.
- Story frames: flat navy background, no gradients or glows (they band after WhatsApp and Instagram compression).
- Logo: `public/brand/meridel-logo-ivory.svg` (horizontal) and `meridel-logo-stacked-ivory.svg`. The mark is the gold globe with one gold meridian and a point at Baku's latitude.

## Formats and builders

| Format | Size | Builder |
|---|---|---|
| Photo post (Instagram AZ+EN, LinkedIn EN) | 1080 × 1350 | `posts/build_posts.py` (add an entry to `POSTS`) |
| Pinned Instagram row | 3 × 1080 × 1440 | `posts/build_pinned.py` |
| Story frame | 1080 × 1920; keep text between y 250 and 1660 | `stories/build_stories.py` |
| Reel / video | 1080 × 1920 | `video/` (see `README.md`) |

Everything renders with Python Playwright into `social/out/` (git-ignored). New photos: find a Pexels photo ID, then run the **Fetch photos** workflow with `name|pexels-id`.

## Captions

**Instagram:** Azerbaijani text first, then a line with "—", then a short English version. 3 to 6 hashtags, for example `#logistika #təchizatzənciri #anbar #supplychain #logistics`. Links aren't clickable in captions, so say "link bioda" / "link in bio".

**LinkedIn:** English, 120 to 220 words. The first line has to make people stop scrolling. Use short paragraphs and one concrete example. Link the matching article and add 3 or 4 hashtags (`#SupplyChain #Logistics #Inventory #MiddleCorridor`).

Suggested times (Baku time; Dubai is the same time zone, UTC+4):

- Instagram: 09:00 to 10:00 or 19:00 to 21:00.
- LinkedIn: Tuesday to Thursday, 08:00 to 10:00.

## Articles to link

| Topic | URL path (prefix `/az` for Azerbaijani) |
|---|---|
| ABC-XYZ analysis | `/insights/abc-xyz-analysis/` |
| Automated reporting | `/insights/automated-reporting/` |
| Cost to serve | `/insights/cost-to-serve/` |
| Forecast accuracy | `/insights/forecast-accuracy/` |
| Freight audit | `/insights/freight-audit/` |
| Logistics dashboards | `/insights/logistics-dashboards/` |
| Logistics emissions (GLEC, ISO 14083) | `/insights/logistics-emissions/` |
| Logistics KPIs (OTIF, fill rate, cost per order) | `/insights/logistics-kpis/` |
| Safety stock | `/insights/safety-stock/` |
| Warehouse location | `/insights/warehouse-location/` |
| Supply chain terms A–Z | `/insights/terms/` |
| Calculators (safety stock, EOQ) | `/insights/tools/` |
