"""Three story frames (WhatsApp Status and Instagram Stories) announcing the company
to personal contacts: Azerbaijani first, English under it.

  python3 social/stories/build_stories.py

Writes social/out/stories/story-1-intro.png, story-2-services.png and
story-3-follow.png (1080 x 1920). Text stays between y 250 and 1660, clear of
the app bars at the top and bottom of a story.
"""
import importlib.util
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'social/out/stories'
FONTS = ROOT / 'node_modules/@fontsource-variable'
STACKED = (ROOT / 'public/brand/meridel-logo-stacked-ivory.svg').read_text(encoding='utf-8')
LOCKUP = (ROOT / 'public/brand/meridel-logo-ivory.svg').read_text(encoding='utf-8')
W, H = 1080, 1920
GOLD, IVORY, NAVY = '#c2a574', '#efe9dd', '#14213a'

# The same hubs and lanes as the pinned Instagram banner.
spec = importlib.util.spec_from_file_location('pinned', ROOT / 'social/posts/build_pinned.py')
pinned = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pinned)
LABELS = {'Rotterdam': 'above', 'Varşava': 'above', 'İstanbul': 'below', 'Bakı': 'below',
          'Dubay': 'right', 'Almatı': 'above', 'Şanxay': 'left'}
MAP_TOP = 1236


def x_of(lon):
    return 70 + (lon + 1) * 7.6


def y_of(lat):
    return MAP_TOP + (56 - lat) * 7.8


def corridor_map():
    pts = {n: (x_of(lo), y_of(la)) for n, lo, la, _ in pinned.CITIES}
    parts = []
    for lon in range(0, 130, 10):
        parts.append(f'<line x1="{x_of(lon):.1f}" y1="{MAP_TOP - 40}" x2="{x_of(lon):.1f}" y2="{MAP_TOP + 360}" class="g"/>')
    for lat in range(20, 60, 5):
        parts.append(f'<line x1="0" y1="{y_of(lat):.1f}" x2="{W}" y2="{y_of(lat):.1f}" class="g"/>')
    sx, sy = pts['Şanxay']
    gx, gy = pts['Genuya']
    parts.append(f'<path d="M{sx:.1f} {sy:.1f} C{sx:.1f} {y_of(14.3):.1f} {x_of(90):.1f} {y_of(13.9):.1f} {x_of(60):.1f} {y_of(14.6):.1f} '
                 f'S{x_of(25):.1f} {y_of(19.3):.1f} {x_of(16):.1f} {y_of(26.4):.1f} S{gx:.1f} {gy + 36:.1f} {gx:.1f} {gy:.1f}" class="sea"/>')
    for names, cls in pinned.LANES:
        seq = [pts[n] for n in names]
        d = f'M{seq[0][0]:.1f} {seq[0][1]:.1f}'
        for (x0, y0), (x1, y1) in zip(seq, seq[1:]):
            if abs(x1 - x0) > abs(y1 - y0):
                mx = (x0 + x1) / 2
                d += f' C{mx:.1f} {y0:.1f} {mx:.1f} {y1:.1f} {x1:.1f} {y1:.1f}'
            else:
                my = (y0 + y1) / 2
                d += f' C{x0:.1f} {my:.1f} {x1:.1f} {my:.1f} {x1:.1f} {y1:.1f}'
        parts.append(f'<path d="{d}" class="{cls}"/>')
    for name, *_ in pinned.CITIES:
        x, y = pts[name]
        home = name in ('Varşava', 'Bakı')
        if home:
            parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="15" class="halo"/>')
        parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{7 if home else 4.5}" class="{"home" if home else "dot"}"/>')
        pos = LABELS.get(name)
        if pos:
            dx, dy, anchor = {'above': (0, -20, 'middle'), 'below': (0, 36, 'middle'), 'right': (16, 8, 'start'),
                              'left': (-14, 8, 'end')}[pos]
            parts.append(f'<text x="{x + dx:.1f}" y="{y + dy:.1f}" text-anchor="{anchor}" '
                         f'class="{"lbl home-l" if home else "lbl"}">{name}</text>')
    return f'<svg class="map" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{"".join(parts)}</svg>'


SERVICES = [
    ('Daşıma və dəhlizlər', 'Transport and corridors'),
    ('Şəbəkələr və anbarlar', 'Networks and warehouses'),
    ('Ehtiyat', 'Inventory'),
    ('Xidmət xərci', 'Cost to serve'),
    ('Logistika emissiyaları', 'Logistics emissions'),
    ('Məlumat təhlili və panellər', 'Data analysis and dashboards'),
]
CONTACTS = [
    ('Sayt', 'Website', 'merideladvisory.com'),
    ('Instagram', '', '@merideladvisory'),
    ('LinkedIn', '', 'Meridel Advisory'),
    ('E-poçt', 'Email', 'hello@merideladvisory.com'),
]

FRAMES = {
    'story-1-intro': f'''
<div class="intro">
  <p class="kicker">Təqdim edirik<span>Introducing</span></p>
  <div class="stacked">{STACKED}</div>
  <i class="rule"></i>
  <h1>Təchizat zənciri və logistika üzrə konsaltinq</h1>
  <p class="en">Supply chain and logistics consulting</p>
</div>
{corridor_map()}
<p class="foot">merideladvisory.com</p>''',
    'story-2-services': f'''
<div class="block">
  <p class="label">Nə edirik <span>What we do</span></p>
  <h1 class="left">Yükləriniz üçün ən doğru yolu birlikdə tapırıq.</h1>
  <p class="en left">Together, we find the right way to move your goods.</p>
  <ul class="rows">{"".join(f"<li><b>{a}</b><span>{b}</span></li>" for a, b in SERVICES)}</ul>
</div>
<p class="foot">merideladvisory.com</p>''',
    'story-3-follow': f'''
<div class="block">
  <p class="label">Əlaqə <span>Contact</span></p>
  <h1 class="left big">Bizi izləyin</h1>
  <p class="en left">Follow us</p>
  <ul class="rows contacts">{"".join(f"<li><span>{a}{(' / ' + b) if b else ''}</span><b>{v}</b></li>" for a, b, v in CONTACTS)}</ul>
  <p class="share">Ehtiyacı olan tanışlarınızla paylaşın.<span>Know someone who could use this? Please share it.</span></p>
</div>
<div class="lockup">{LOCKUP}</div>''',
}

CSS = f'''
  html, body {{ margin: 0; }}
  body {{ width: {W}px; height: {H}px; position: relative; overflow: hidden; color: {IVORY};
         background: radial-gradient(ellipse at 50% 30%, #1f3157 0%, {NAVY} 62%);
         font-family: 'IBM Plex Sans Variable', sans-serif; }}
  svg.map {{ position: absolute; inset: 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 1170px, #000 1250px, #000 1540px, transparent 1610px); }}
  .g {{ stroke: {GOLD}; stroke-opacity: .1; stroke-width: 1.2; }}
  .route {{ fill: none; stroke: {GOLD}; stroke-width: 3.2; stroke-linecap: round; stroke-dasharray: 1 10; }}
  .route.south {{ stroke: #a9b6cb; }}
  .route.thin {{ stroke-width: 2.6; stroke-opacity: .8; }}
  .sea {{ fill: none; stroke: #a9b6cb; stroke-opacity: .5; stroke-width: 2; stroke-dasharray: 12 9; }}
  .dot {{ fill: {IVORY}; stroke: {NAVY}; stroke-width: 2.5; }}
  .home {{ fill: {GOLD}; stroke: {NAVY}; stroke-width: 2.5; }}
  .halo {{ fill: none; stroke: {GOLD}; stroke-opacity: .45; stroke-width: 1.5; }}
  .lbl {{ font: 500 21px 'IBM Plex Sans Variable', sans-serif; fill: #b9c2d3; }}
  .home-l {{ fill: {IVORY}; font-weight: 600; }}
  h1 {{ margin: 0; font-family: 'Newsreader Variable', serif; font-weight: 400; color: #fff; letter-spacing: -.01em; text-wrap: balance; }}
  .en {{ margin: 18px 0 0; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 36px; color: #b9c2d3; }}
  .rule {{ display: block; width: 84px; height: 3px; background: {GOLD}; margin: 40px auto 38px; }}
  .intro {{ position: absolute; top: 262px; left: 90px; right: 90px; text-align: center; }}
  .kicker {{ margin: 0 0 34px; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 48px; color: {GOLD}; }}
  .kicker span, .label span {{ display: block; margin-top: 6px; font: 400 24px 'IBM Plex Sans Variable', sans-serif;
         font-style: normal; color: #9aa6bd; letter-spacing: .02em; }}
  .stacked svg {{ width: 470px; height: auto; display: block; margin: 0 auto; }}
  .intro h1 {{ font-size: 62px; line-height: 1.08; }}
  .intro .en {{ font-size: 33px; margin-top: 14px; }}
  .block {{ position: absolute; top: 280px; left: 96px; right: 96px; }}
  .label {{ margin: 0 0 40px; font-size: 30px; font-weight: 500; color: {GOLD}; }}
  .label span {{ display: inline; margin: 0 0 0 10px; }}
  h1.left {{ font-size: 76px; line-height: 1.06; }}
  h1.big {{ font-size: 120px; line-height: 1; }}
  .rows {{ list-style: none; margin: 64px 0 0; padding: 0; border-top: 1px solid rgba(194,165,116,.4); }}
  .rows li {{ padding: 26px 0; border-bottom: 1px solid rgba(194,165,116,.22); }}
  .rows b {{ display: block; font-size: 38px; font-weight: 500; color: #fff; }}
  .rows span {{ display: block; margin-top: 4px; font-size: 25px; color: #9aa6bd; }}
  .contacts li {{ padding: 30px 0; }}
  .contacts span {{ margin: 0 0 6px; font-size: 25px; }}
  .contacts b {{ font-family: 'Newsreader Variable', serif; font-weight: 420; font-size: 50px; color: {IVORY}; }}
  .share {{ margin: 64px 0 0; font-size: 32px; line-height: 1.35; color: #d5dcea; }}
  .share span {{ display: block; margin-top: 6px; font-size: 25px; color: #9aa6bd; }}
  .foot {{ position: absolute; bottom: 250px; left: 0; right: 0; margin: 0; text-align: center; font-size: 30px;
          letter-spacing: .04em; color: #d5dcea; }}
  .lockup {{ position: absolute; bottom: 270px; left: 0; right: 0; }}
  .lockup svg {{ display: block; height: 78px; width: auto; margin: 0 auto; }}
'''


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = OUT / '.story.html'
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        pg = b.new_page(viewport={'width': W, 'height': H})
        for name, body in FRAMES.items():
            tmp.write_text(f'''<!doctype html><html lang="az"><head><meta charset="utf-8">
<link rel="stylesheet" href="{(FONTS / 'newsreader/opsz.css').as_uri()}">
<link rel="stylesheet" href="{(FONTS / 'ibm-plex-sans/wght.css').as_uri()}">
<style>{CSS}</style></head><body>{body}</body></html>''', encoding='utf-8')
            pg.goto(tmp.as_uri())
            pg.evaluate('document.fonts.ready')
            pg.wait_for_timeout(250)
            pg.screenshot(path=str(OUT / f'{name}.png'))
            print('wrote', f'social/out/stories/{name}.png')
        b.close()
    tmp.unlink(missing_ok=True)


if __name__ == '__main__':
    main()
