// Deterministic timeline: window.seek(t) draws the frame at t seconds.
// Elements with data-at fade and rise in at that time; .scene elements with
// data-start/data-end are shown in that window and fade out at the end.
(function () {
  const clamp = (x) => Math.max(0, Math.min(1, x));
  const ease = {
    out: (x) => 1 - Math.pow(1 - x, 3),
    inOut: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  };
  const prog = (t, at, dur) => clamp((t - at) / dur);
  const NS = 'http://www.w3.org/2000/svg';

  // Slowly turning globe of meridians in the background.
  const bg = document.getElementById('bg');
  const R = 760, CX = 1010, CY = 820;
  const merids = [];
  if (bg) {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', CX); c.setAttribute('cy', CY); c.setAttribute('r', R);
    bg.appendChild(c);
    for (let i = 0; i < 12; i++) {
      const e = document.createElementNS(NS, 'ellipse');
      e.setAttribute('cx', CX); e.setAttribute('cy', CY); e.setAttribute('ry', R);
      bg.appendChild(e); merids.push(e);
    }
    for (const lat of [-60, -40, -20, 0, 20, 40, 60]) {
      const y = CY - R * Math.sin((lat * Math.PI) / 180);
      const hw = R * Math.cos((lat * Math.PI) / 180);
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', CX - hw); l.setAttribute('x2', CX + hw);
      l.setAttribute('y1', y); l.setAttribute('y2', y);
      bg.appendChild(l);
    }
  }

  // Collected on the first seek, so elements a page builds in script are included.
  let entering = null;
  const scenes = [...document.querySelectorAll('.scene')];
  const hooks = [];

  window.T = { clamp, ease, prog, NS, onSeek: (fn) => hooks.push(fn) };

  window.seek = function (t) {
    if (!entering) entering = [...document.querySelectorAll('[data-at]')];
    merids.forEach((e, i) => {
      const a = ((i * 15 + t * 4) * Math.PI) / 180;
      e.setAttribute('rx', Math.abs(R * Math.sin(a)).toFixed(1));
    });
    for (const s of scenes) {
      const a = +s.dataset.start, b = +s.dataset.end, fade = +(s.dataset.fade || 0.45);
      const on = t >= a && t < b;
      s.style.display = on ? 'block' : 'none';
      if (on) s.style.opacity = s.dataset.keep ? 1 : 1 - ease.inOut(prog(t, b - fade, fade));
    }
    for (const el of entering) {
      const dy = +(el.dataset.dy || 30), dur = +(el.dataset.dur || 0.65);
      const p = ease.out(prog(t, +el.dataset.at, dur));
      el.style.opacity = p;
      el.style.transform = `translateY(${((1 - p) * dy).toFixed(2)}px)`;
    }
    hooks.forEach((fn) => fn(t));
  };

  window.fmt = (v) => {
    const n = Math.round(v);
    const s = Math.abs(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return (n < 0 ? '−' : '') + s;
  };
})();
