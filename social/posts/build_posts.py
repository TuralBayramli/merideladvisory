"""Photo posts for Instagram (Azerbaijani with English) and LinkedIn (English).

  python3 social/posts/build_posts.py

Each post in POSTS becomes two 1080 x 1350 images in social/out/posts/:
<n>-<slug>-instagram.png and <n>-<slug>-linkedin.png. Captions are in captions.md
next to them.
"""
import html
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / 'social/photos/raw'
OUT = ROOT / 'social/out/posts'
FONTS = ROOT / 'node_modules/@fontsource-variable'
LOGO = (ROOT / 'public/brand/meridel-logo-ivory.svg').read_text(encoding='utf-8')

POSTS = [
    dict(
        slug='otif', photo='delivery-7363098.jpg', focus=(48, 45),
        label=('Logistika KPI-ları', 'Logistics KPIs'),
        head=('Vaxtında çatdı. Bəs tam çatdı?', 'On time. But in full?'),
        stats=[('92%', 'Vaxtında', 'On time'), ('90%', 'Tam', 'In full'), ('≈85%', 'Hər ikisi: OTIF', 'Both: OTIF')],
        note=('OTIF sifarişi yalnız hər iki şərt ödənəndə sayır.',
              'OTIF counts an order only when it arrives on the agreed date and complete.'),
    ),
    dict(
        slug='abc-xyz', photo='team-4481329.jpg', focus=(42, 50),
        label=('Ehtiyat', 'Inventory'),
        head=('Bütün məhsullara eyni qayda? Bu, pul itkisidir.', 'Same rules for every item? That costs money.'),
        stats=[('≈80%', 'A məhsulları', 'A items'), ('≈15%', 'B məhsulları', 'B items'), ('≈5%', 'C məhsulları', 'C items')],
        stats_caption=('Satış dəyərindəki pay', 'Share of sales value'),
        note=('ABC-XYZ hər qrupa öz ehtiyat siyasətini verir.',
              'ABC-XYZ analysis gives each group of items its own stock policy.'),
    ),
    dict(
        slug='warehouse-location', photo='forklift-1267338.jpg', focus=(45, 55),
        label=('Şəbəkə dizaynı', 'Network design'),
        head=('Anbarın yeri xərclərinizi on il müəyyən edir.', 'Where you put a warehouse sets your costs for ten years.'),
        stats=[('01', 'Daşıma xərci', 'Transport cost'), ('02', 'Çatdırılma müddəti', 'Delivery time'), ('03', 'İşçi qüvvəsi', 'Staff and labour')],
        note=('Qərardan əvvəl real məkanları ümumi xərc və xidmətə görə müqayisə edin.',
              'Compare real sites on total cost and service before you decide.'),
    ),
]


def page(p, mode):
    """mode: 'ig' = Azerbaijani with English under it; 'li' = English only."""
    e = html.escape
    az = mode == 'ig'
    label = p['label'][0] if az else p['label'][1]
    head = e(p['head'][0] if az else p['head'][1])
    sub = f'<p class="sub">{e(p["head"][1])}</p>' if az else ''
    stats = ''.join(
        f'<li><b>{e(v)}</b><span>{e(a if az else b)}</span>' + (f'<i>{e(b)}</i>' if az else '') + '</li>'
        for v, a, b in p['stats']
    )
    cap = p.get('stats_caption')
    cap_html = f'<p class="cap">{e(cap[0] + " / " + cap[1] if az else cap[1])}</p>' if cap else ''
    note = e(p['note'][0] if az else p['note'][1])
    note_en = f'<p class="note en">{e(p["note"][1])}</p>' if az else ''
    fx, fy = p['focus']
    photo = (RAW / p['photo']).as_uri()
    return f'''<!doctype html><html lang="{'az' if az else 'en'}"><head><meta charset="utf-8">
<link rel="stylesheet" href="{(FONTS / 'newsreader/opsz.css').as_uri()}">
<link rel="stylesheet" href="{(FONTS / 'ibm-plex-sans/wght.css').as_uri()}">
<style>
  html, body {{ margin: 0; }}
  body {{ width: 1080px; height: 1350px; overflow: hidden; background: #14213a; color: #efe9dd;
         font-family: 'IBM Plex Sans Variable', sans-serif; display: flex; flex-direction: column; }}
  .pic {{ position: relative; flex: 1; min-height: 560px; }}
  .pic img {{ position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: {fx}% {fy}%; }}
  .pic::after {{ content: ''; position: absolute; inset: 0;
           background: linear-gradient(180deg, rgba(20,33,58,0) 55%, rgba(20,33,58,.75) 85%, #14213a 100%); }}
  .text {{ position: relative; margin-top: -90px; padding: 0 72px; }}
  .label {{ display: inline-block; font-size: 24px; font-weight: 500; color: #c2a574; letter-spacing: .02em; margin: 0 0 18px; }}
  h1 {{ margin: 0; font-family: 'Newsreader Variable', serif; font-weight: 420; font-size: {58 if len(head) > 44 else 66}px;
        line-height: 1.08; letter-spacing: -.01em; text-wrap: balance; color: #ffffff; }}
  .sub {{ margin: 14px 0 0; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 32px; color: #b9c2d3; }}
  ul {{ list-style: none; margin: 36px 0 0; padding: 26px 0 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        border-top: 1px solid rgba(194,165,116,.45); }}
  li b {{ display: block; font-family: 'Newsreader Variable', serif; font-weight: 400; font-size: 58px; line-height: 1; color: #c2a574; }}
  li span {{ display: block; margin-top: 10px; font-size: 24px; font-weight: 500; color: #ffffff; }}
  li i {{ display: block; margin-top: 2px; font-style: normal; font-size: 20px; color: #9aa6bd; }}
  .cap {{ margin: 14px 0 0; font-size: 18px; color: #9aa6bd; }}
  .note {{ margin: 30px 0 0; font-size: 25px; line-height: 1.4; color: #d5dcea; max-width: 880px; }}
  .note.en {{ margin-top: 6px; font-size: 21px; color: #9aa6bd; }}
  .foot {{ display: flex; justify-content: space-between; align-items: center; padding: 40px 72px 48px; font-size: 22px; color: #b9c2d3; }}
  .foot svg {{ height: 54px; width: auto; display: block; }}
</style></head><body>
<div class="pic"><img src="{photo}"></div>
<div class="text">
  <p class="label">{e(label)}</p>
  <h1>{head}</h1>{sub}
  <ul>{stats}</ul>{cap_html}
  <p class="note">{note}</p>{note_en}
</div>
<div class="foot"><div class="logo">{LOGO}</div><span>merideladvisory.com</span></div>
</body></html>'''


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = OUT / '.post.html'
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        pg = browser.new_page(viewport={'width': 1080, 'height': 1350}, device_scale_factor=1)
        for n, p in enumerate(POSTS, 1):
            for mode, name in (('ig', 'instagram'), ('li', 'linkedin')):
                tmp.write_text(page(p, mode), encoding='utf-8')
                pg.goto(tmp.as_uri())
                pg.evaluate('document.fonts.ready')
                pg.wait_for_timeout(200)
                out = OUT / f'{n}-{p["slug"]}-{name}.png'
                pg.screenshot(path=str(out))
                print(out.relative_to(ROOT))
        browser.close()
    tmp.unlink(missing_ok=True)


if __name__ == '__main__':
    main()
