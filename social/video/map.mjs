// Projects the trade-lane map for the vertical social videos into social/video/map.js.
// Run from the repository root: node social/video/map.mjs
import fs from 'node:fs';
import { feature, mesh } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { geoConicConformal, geoPath } from 'd3-geo';

const W = 1080;
const H = 760;
const raw = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json', 'utf-8'));
const pre = presimplify(raw);
const topo = simplify(pre, quantile(pre, 0.45));
const land = feature(topo, topo.objects.land);
const borders = mesh(topo, topo.objects.countries, (a, b) => a !== b);
const frame = {
  type: 'Feature',
  properties: {},
  geometry: { type: 'Polygon', coordinates: [[[15, 22], [15, 55], [79, 55], [79, 22], [15, 22]]] },
};
const projection = geoConicConformal().parallels([30, 50]).rotate([-47, 0]).fitExtent([[0, 0], [W, H]], frame).clipExtent([[0, 0], [W, H]]);
const path = geoPath(projection).digits(1);
const P = (lon, lat) => projection([lon, lat]);

function smooth(pts) {
  const f = (n) => n.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}

const city = {
  warsaw: [21.01, 52.23], istanbul: [28.98, 41.01], tbilisi: [44.79, 41.72], baku: [49.87, 40.41],
  aktau: [51.2, 43.65], almaty: [76.95, 43.25], dubai: [55.27, 25.2],
};
const lanes = [
  [P(...city.warsaw), P(26.1, 44.43), P(...city.istanbul), P(36.5, 40.4), P(43.1, 40.6), P(...city.tbilisi), P(...city.baku)],
  [P(...city.baku), P(...city.aktau), P(58.5, 45.2), P(66.5, 44.6), P(71.4, 42.9), P(...city.almaty)],
  [P(...city.baku), P(48.87, 38.43), P(49.6, 37.2), P(52.6, 32.6), P(56.27, 27.18), P(...city.dubai)],
].map(smooth);

const out = {
  width: W,
  height: H,
  land: path(land),
  borders: path(borders),
  lanes,
  cities: Object.fromEntries(Object.entries(city).map(([k, v]) => [k, P(...v).map((n) => +n.toFixed(1))])),
};
fs.writeFileSync('social/video/map.js', `window.MAP = ${JSON.stringify(out)};\n`);
