"""Build the Meridel Advisory logo files from code, so they stay exact and editable.

  python3 brand/build_logo.py          (run from the repository root, after npm install)

The wordmark is set in Newsreader (MERIDEL) and IBM Plex Sans (ADVISORY), the
site's own typefaces, and converted to outlines so it looks the same everywhere.
Writes:
  src/assets/brand/lockup.svg        header and footer logo (colours from CSS)
  src/assets/brand/symbol.svg        the mark alone (colours from CSS)
  public/favicon.svg                 browser tab icon
  public/brand/*.svg                 logo files for print and partners
Then brand/render_png.py makes the PNG files (profile picture, LinkedIn cover, link preview).
"""
import io
import math
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
NM = ROOT / 'node_modules/@fontsource-variable'
SERIF = NM / 'newsreader/files/newsreader-latin-opsz-normal.woff2'
SANS = NM / 'ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2'

NAVY = '#14213a'
IVORY = '#efe9dd'
GOLD_DARK = '#9a7a48'   # gold on light backgrounds
GOLD_LIGHT = '#c2a574'  # gold on navy


def num(v):
    s = f'{v:.2f}'.rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s


class Face:
    def __init__(self, path, axes):
        data = path.read_bytes()
        tt = TTFont(io.BytesIO(data))
        self.upem = tt['head'].unitsPerEm
        static = instantiateVariableFont(tt, axes)
        self.glyphs = static.getGlyphSet()
        self.order = static.getGlyphOrder()
        buf = io.BytesIO()
        raw = TTFont(io.BytesIO(data))
        raw.flavor = None  # HarfBuzz reads plain OpenType, not WOFF2
        raw.save(buf)
        self.hbfont = hb.Font(hb.Face(buf.getvalue()))
        self.hbfont.set_variations(axes)
        self.cap = static['OS/2'].sCapHeight / self.upem

    def path(self, text, size, tracking, x0=0.0, baseline=0.0):
        """SVG path of the text and its width (without trailing tracking)."""
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.hbfont, buf, {'kern': True, 'liga': False})
        k = size / self.upem
        x, out = x0, []
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
            pen = SVGPathPen(self.glyphs, ntos=num)
            self.glyphs[self.order[info.codepoint]].draw(
                TransformPen(pen, (k, 0, 0, -k, x + pos.x_offset * k, baseline - pos.y_offset * k)))
            out.append(pen.getCommands())
            x += pos.x_advance * k + tracking * size
        return ' '.join(out), x - tracking * size - x0


SERIF_FACE = Face(SERIF, {'wght': 330, 'opsz': 72})
SANS_FACE = Face(SANS, {'wght': 430})

# The mark, drawn on a 64-unit grid like an engraved globe inside a fine double
# ring: several meridians in hairline gold, one in full gold, and one point on it
# at the latitude of Baku. The meridians stop short of the inner ring (inset), so
# they never crowd the ring or knot at the poles, and leave a small gap around the
# point. The gold meridian is only a little heavier than the others: it stands out
# by its colour, not its width.
VARIANTS = {
    'turning': dict(lons=[-40, -12, 16, 44], gold=44),            # off-centre, as if turning
    'five': dict(lons=[-60, -30, 0, 30, 60], gold=30),             # symmetric
    'three': dict(lons=[-45, 0, 45], gold=45),                     # quietest
}
VARIANT = 'turning'
BAKU = 40.4
OUTER, INNER, R = 30.0, 27.2, 27.0
# regular: logo files and banners; medium: the website header (about 50 px tall);
# profile: profile pictures; bold: the browser tab icon (only one hairline).
WEIGHTS = {
    'regular': dict(outer=0.9, inner=0.5, inner_op=0.7, gold=0.85, hair=0.55, hair_op=0.7, dot=2.0, gap=2.7, inset=1.8),
    'medium': dict(outer=1.4, inner=0.8, inner_op=0.7, gold=1.45, hair=0.9, hair_op=0.75, dot=2.6, gap=3.5, inset=2.2),
    'profile': dict(outer=1.4, inner=0.8, inner_op=0.7, gold=1.2, hair=0.8, hair_op=0.7, dot=2.6, gap=3.2, inset=2.2),
    'bold': dict(outer=2.4, inner=1.2, inner_op=0.75, gold=2.4, hair=1.6, hair_op=0.65, dot=3.6, gap=5.0, inset=3.0, only=[-12]),
}


def point_on(lon, lat=BAKU):
    """A point on a meridian (longitude seen from the front) at a latitude."""
    return (32 + R * math.sin(math.radians(lon)) * math.cos(math.radians(lat)),
            32 - R * math.sin(math.radians(lat)))


def meridian(lon, color, width, opacity=1.0):
    rx = R * abs(math.sin(math.radians(lon)))
    op = f' stroke-opacity="{num(opacity)}"' if opacity < 1 else ''
    if rx < 0.05:
        return f'<line x1="32" y1="{num(32 - R)}" x2="32" y2="{num(32 + R)}" fill="none" {color("stroke")} stroke-width="{num(width)}"{op}/>'
    sweep = 1 if lon > 0 else 0
    return (f'<path d="M32 {num(32 - R)}A{num(rx)} {num(R)} 0 0 {sweep} 32 {num(32 + R)}" fill="none" '
            f'{color("stroke")} stroke-width="{num(width)}"{op}/>')


def symbol(uid, ink, gold, weight='regular', tx=0.0, ty=0.0, scale=1.0, variant=None):
    """ink colours the point; gold colours the globe and rings."""
    v = VARIANTS[variant or VARIANT]
    w = WEIGHTS[weight]
    px, py = point_on(v['gold'])
    lons = [lon for lon in v['lons'] if lon == v['gold'] or 'only' not in w or lon in w['only']]
    lines = ''.join(meridian(lon, gold, w['gold'] if lon == v['gold'] else w['hair'], 1 if lon == v['gold'] else w['hair_op'])
                    for lon in lons)
    return (
        f'<g transform="translate({num(tx)} {num(ty)}) scale({num(scale)})">'
        f'<defs><clipPath id="{uid}-in"><circle cx="32" cy="32" r="{num(INNER - w["inset"])}"/></clipPath>'
        f'<mask id="{uid}-gap" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">'
        f'<rect width="64" height="64" fill="#fff"/><circle cx="{num(px)}" cy="{num(py)}" r="{num(w["gap"])}" fill="#000"/></mask></defs>'
        f'<g clip-path="url(#{uid}-in)"><g mask="url(#{uid}-gap)">{lines}</g></g>'
        f'<circle cx="32" cy="32" r="{num(OUTER)}" fill="none" {gold("stroke")} stroke-width="{num(w["outer"])}"/>'
        f'<circle cx="32" cy="32" r="{num(INNER)}" fill="none" {gold("stroke")} stroke-width="{num(w["inner"])}" stroke-opacity="{num(w["inner_op"])}"/>'
        f'<circle cx="{num(px)}" cy="{num(py)}" r="{num(w["dot"])}" {ink("fill")}/>'
        f'</g>'
    )


def solid(color):
    return lambda prop: f'{prop}="{color}"'


def css(var, fallback):
    return lambda prop: f'style="{prop}:var({var},{fallback})"'


def current():
    return lambda prop: f'{prop}="currentColor"'


# Proportions: large for profile pictures and banners, small for the website header.
SIZES = {
    'large': dict(sym=92, gap=26, wm=50, track=0.2, sub=13.5, sub_track=0.56, lead=14),
    'small': dict(sym=46, gap=15, wm=25, track=0.2, sub=9.4, sub_track=0.5, lead=7),
}


def lockup(uid, ink, gold, size='large', pad=0.0):
    """Mark on the left, MERIDEL with ADVISORY underneath on the right."""
    s = SIZES[size]
    cap_wm = SERIF_FACE.cap * s['wm']
    cap_sub = SANS_FACE.cap * s['sub']
    block = cap_wm + s['lead'] + cap_sub
    h = s['sym']
    top = (h - block) / 2
    x_text = s['sym'] + s['gap']
    wm_path, wm_w = SERIF_FACE.path('MERIDEL', s['wm'], s['track'], x_text, top + cap_wm)
    sub_path, sub_w = SANS_FACE.path('ADVISORY', s['sub'], s['sub_track'], x_text + 0.04 * s['wm'],
                                     top + cap_wm + s['lead'] + cap_sub)
    width = x_text + max(wm_w, sub_w + 0.04 * s['wm'])
    body = (symbol(uid, ink, gold, 'medium' if size == 'small' else 'regular', 0, 0, h / 64)
            + f'<path d="{wm_path}" {ink("fill")}/>'
            + f'<path d="{sub_path}" {gold("fill")}/>')
    vb = f'{num(-pad)} {num(-pad)} {num(width + 2 * pad)} {num(h + 2 * pad)}'
    return width, h, (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" '
                      f'width="{num(width + 2 * pad)}" height="{num(h + 2 * pad)}" role="img" aria-label="Meridel Advisory">'
                      f'{body}</svg>')


def stacked(uid, ink, gold):
    """Mark above, MERIDEL and ADVISORY centred underneath (for square formats)."""
    s = SIZES['large']
    sym = 120
    wm_path, wm_w = SERIF_FACE.path('MERIDEL', s['wm'], s['track'])
    sub_path, sub_w = SANS_FACE.path('ADVISORY', s['sub'], s['sub_track'])
    width = max(wm_w, sub_w, sym)
    cap_wm = SERIF_FACE.cap * s['wm']
    cap_sub = SANS_FACE.cap * s['sub']
    y_wm = sym + 34 + cap_wm
    y_sub = y_wm + s['lead'] + cap_sub
    wm_path, _ = SERIF_FACE.path('MERIDEL', s['wm'], s['track'], (width - wm_w) / 2, y_wm)
    sub_path, _ = SANS_FACE.path('ADVISORY', s['sub'], s['sub_track'], (width - sub_w) / 2, y_sub)
    body = (symbol(uid, ink, gold, 'regular', (width - sym) / 2, 0, sym / 64)
            + f'<path d="{wm_path}" {ink("fill")}/><path d="{sub_path}" {gold("fill")}/>')
    return width, y_sub, f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {num(width)} {num(y_sub)}" width="{num(width)}" height="{num(y_sub)}" role="img" aria-label="Meridel Advisory">{body}</svg>'


def write(rel, text):
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text + '\n', encoding='utf-8')
    print('wrote', rel)


def main():
    # Website: colours come from CSS (currentColor for ink, --logo-gold for the gold).
    gold_var = css('--logo-gold', GOLD_DARK)
    write('src/assets/brand/lockup.svg', lockup('LOGOID', current(), gold_var, 'small')[2])
    write('src/assets/brand/symbol.svg',
          f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Meridel Advisory">'
          f'{symbol("LOGOID", current(), gold_var)}</svg>')

    # Browser tab icon: bold mark on a navy tile.
    write('public/favicon.svg',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
          f'<rect width="64" height="64" rx="14" fill="{NAVY}"/>'
          f'{symbol("fav", solid(IVORY), solid(GOLD_LIGHT), "bold", 1.6, 1.6, 60.8 / 64)}</svg>')

    # Files for use elsewhere.
    write('public/brand/meridel-logo-navy.svg', lockup('a', solid(NAVY), solid(GOLD_DARK), 'large', 4)[2])
    write('public/brand/meridel-logo-ivory.svg', lockup('b', solid(IVORY), solid(GOLD_LIGHT), 'large', 4)[2])
    write('public/brand/meridel-logo-stacked-navy.svg', stacked('c', solid(NAVY), solid(GOLD_DARK))[2])
    write('public/brand/meridel-logo-stacked-ivory.svg', stacked('d', solid(IVORY), solid(GOLD_LIGHT))[2])
    write('public/brand/meridel-symbol-navy.svg',
          f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">{symbol("e", solid(NAVY), solid(GOLD_DARK))}</svg>')
    write('public/brand/meridel-symbol-profile.svg',
          f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">{symbol("g", solid(IVORY), solid(GOLD_LIGHT), "profile")}</svg>')
    write('public/brand/meridel-symbol-ivory.svg',
          f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">{symbol("f", solid(IVORY), solid(GOLD_LIGHT))}</svg>')


if __name__ == '__main__':
    main()
