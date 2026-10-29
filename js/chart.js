/* =====================================================================
 * Chain Academy v4 · 合成行情图（js/chart.js）
 * 用途：首页 / 课程图谱的视觉母版。全部数据由本地确定性随机数生成，
 *      不是真实行情，不接入任何交易所接口。仅作版面与教学示意。
 * ===================================================================== */
'use strict';

function mulberry32(seed){
  return function(){
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* 生成带趋势区间的合成 OHLC */
function synthSeries(n, seed){
  const rnd = mulberry32(seed);
  let price = 100;
  let drift = 0.0004, vol = 0.012, phase = 0;
  const out = [];
  for(let i = 0; i < n; i++){
    if(i % 34 === 0){
      phase = (phase + 1) % 4;
      drift = [0.0016, -0.0022, 0.0006, -0.0009][phase];
      vol = [0.010, 0.017, 0.008, 0.013][phase];
    }
    const open = price;
    const shock = (rnd() - 0.5) * 2;
    const close = open * (1 + drift + shock * vol * 0.55);
    const hi = Math.max(open, close) * (1 + rnd() * vol * 0.5);
    const lo = Math.min(open, close) * (1 - rnd() * vol * 0.5);
    out.push({ o:open, h:hi, l:lo, c:close, v:0.25 + rnd() * 0.75 + Math.abs(close-open)/open*22 });
    price = close;
  }
  return out;
}

function cssVar(name){
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function initHeroChart(canvas, opts){
  if(!canvas) return;
  const o = Object.assign({ count:72, seed:20260214, showProfile:true, interactive:true }, opts || {});
  const ctx = canvas.getContext('2d');
  const data = synthSeries(o.count, o.seed);
  let W = 0, H = 0, dpr = 1, pad = { t:30, r:o.showProfile?74:18, b:26, l:14 };
  let reveal = 0, raf = null, hover = null, lastTick = 0;

  const priceMin = Math.min(...data.map(d => d.l));
  const priceMax = Math.max(...data.map(d => d.h));
  const padP = (priceMax - priceMin) * 0.14;
  const min = priceMin - padP, max = priceMax + padP;

  const X = i => pad.l + (i / (data.length - 1)) * (W - pad.l - pad.r);
  const Y = p => pad.t + (1 - (p - min) / (max - min)) * (H - pad.t - pad.b);

  function resize(){
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw(){
    const text = cssVar('--txt'), dim = cssVar('--txt-2'), faint = cssVar('--faint');
    const line = cssVar('--line'), lineStrong = cssVar('--line-strong');
    const gold = cssVar('--brand'), pos = cssVar('--pos'), neg = cssVar('--neg');
    const surface = cssVar('--bg-2');
    ctx.clearRect(0, 0, W, H);

    /* 网格 */
    ctx.strokeStyle = line; ctx.lineWidth = 1;
    for(let i = 0; i <= 4; i++){
      const y = pad.t + i * (H - pad.t - pad.b) / 4;
      ctx.beginPath(); ctx.moveTo(pad.l, y + .5); ctx.lineTo(W - pad.r + 8, y + .5); ctx.stroke();
    }
    for(let i = 0; i <= 6; i++){
      const x = pad.l + i * (W - pad.l - pad.r) / 6;
      ctx.beginPath(); ctx.moveTo(x + .5, pad.t); ctx.lineTo(x + .5, H - pad.b); ctx.stroke();
    }

    /* 价格刻度 */
    ctx.font = '10px "JetBrains Mono", ui-monospace, monospace';
    ctx.fillStyle = faint; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    for(let i = 0; i <= 4; i++){
      const y = pad.t + i * (H - pad.t - pad.b) / 4;
      const p = max - i * (max - min) / 4;
      ctx.fillText(p.toFixed(1), W - pad.r + 14, y);
    }

    const nVis = Math.max(1, Math.floor(data.length * reveal));
    const bw = Math.max(2, (W - pad.l - pad.r) / data.length * 0.62);

    /* 成交量柱（底部，极淡） */
    const maxV = Math.max(...data.map(d => d.v));
    for(let i = 0; i < nVis; i++){
      const d = data[i];
      const h = (d.v / maxV) * 34;
      ctx.fillStyle = (d.c >= d.o ? gold : neg) + '';
      ctx.globalAlpha = 0.10;
      ctx.fillRect(X(i) - bw / 2, H - pad.b - h, bw, h);
      ctx.globalAlpha = 1;
    }

    /* K 线 */
    for(let i = 0; i < nVis; i++){
      const d = data[i], x = X(i), up = d.c >= d.o;
      ctx.strokeStyle = up ? pos : neg;
      ctx.fillStyle = up ? pos : neg;
      ctx.globalAlpha = 0.92;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, Y(d.h)); ctx.lineTo(x, Y(d.l)); ctx.stroke();
      const yTop = Y(Math.max(d.o, d.c)), yBot = Y(Math.min(d.o, d.c));
      ctx.fillRect(x - bw / 2, yTop, bw, Math.max(1.2, yBot - yTop));
      ctx.globalAlpha = 1;
    }

    /* EMA 均线 */
    const ema = [];
    let prev = data[0].c;
    data.forEach((d, i) => { prev = i === 0 ? d.c : prev + (d.c - prev) * 0.16; ema.push(prev); });
    ctx.beginPath();
    for(let i = 0; i < nVis; i++){ const x = X(i), y = Y(ema[i]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.strokeStyle = gold; ctx.lineWidth = 1.6; ctx.lineJoin = 'round'; ctx.stroke();

    /* 支撑/阻力虚线 */
    const sup = Math.min(...data.slice(-24).map(d => d.l));
    const res = Math.max(...data.slice(-24).map(d => d.h));
    [[sup, '支撑 · SUPPORT'], [res, '阻力 · RESISTANCE']].forEach(([p, label], idx) => {
      ctx.save();
      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = idx ? neg : pos;
      ctx.globalAlpha = .5;
      ctx.beginPath(); ctx.moveTo(pad.l, Y(p)); ctx.lineTo(W - pad.r, Y(p)); ctx.stroke();
      ctx.restore();
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = idx ? neg : pos;
      ctx.globalAlpha = .8;
      ctx.textAlign = 'left';
      ctx.fillText(label, pad.l + 2, Y(p) - 8);
      ctx.globalAlpha = 1;
    });

    /* 右侧成交量分布 / 流动性 */
    if(o.showProfile){
      const buckets = 14, top = pad.t, bottom = H - pad.b;
      const hist = new Array(buckets).fill(0);
      data.forEach(d => {
        const mid = (d.h + d.l) / 2;
        const k = Math.min(buckets - 1, Math.max(0, Math.floor((mid - min) / (max - min) * buckets)));
        hist[k] += d.v;
      });
      const maxH = Math.max(...hist);
      const x0 = W - pad.r + 6;
      for(let k = 0; k < buckets; k++){
        const y = bottom - (k + 1) * (bottom - top) / buckets;
        const w = (hist[k] / maxH) * (pad.r - 26);
        ctx.fillStyle = gold;
        ctx.globalAlpha = 0.18 + 0.34 * (hist[k] / maxH);
        ctx.fillRect(x0, y + 1, w, (bottom - top) / buckets - 2);
        ctx.globalAlpha = 1;
      }
      ctx.save();
      ctx.translate(W - 8, top + 46);
      ctx.rotate(Math.PI / 2);
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = faint; ctx.textAlign = 'left';
      ctx.fillText('VOLUME PROFILE', 0, 0);
      ctx.restore();
    }

    /* 最新价 */
    const last = data[nVis - 1];
    const lx = X(nVis - 1), ly = Y(last.c);
    ctx.strokeStyle = gold; ctx.globalAlpha = .35; ctx.setLineDash([2,4]);
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(W - pad.r, ly); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    ctx.fillStyle = gold;
    ctx.fillRect(lx - 2.5, ly - 2.5, 5, 5);

    /* 悬停十字线 */
    if(o.interactive && hover != null && hover >= 0 && hover < data.length){
      const x = X(hover), d = data[hover];
      ctx.strokeStyle = lineStrong; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x + .5, pad.t); ctx.lineTo(x + .5, H - pad.b); ctx.stroke();
      const y = Y(d.c);
      ctx.beginPath(); ctx.moveTo(pad.l, y + .5); ctx.lineTo(W - pad.r, y + .5); ctx.stroke();
      const label = `${d.c.toFixed(2)}  O ${d.o.toFixed(2)}  H ${d.h.toFixed(2)}  L ${d.l.toFixed(2)}`;
      ctx.font = '10px "JetBrains Mono", monospace';
      const tw = ctx.measureText(label).width + 16;
      ctx.fillStyle = surface;
      ctx.fillRect(pad.l, 4, tw, 18);
      ctx.strokeStyle = lineStrong; ctx.strokeRect(pad.l + .5, 4.5, tw, 18);
      ctx.fillStyle = text; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(label, pad.l + 8, 13);
    }
  }

  /* 首次进入视口后再播放展开动画 */
  let started = false;
  function play(){
    if(started) return;
    started = true;
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(reduce){ reveal = 1; draw(); return; }
    const t0 = performance.now();
    (function step(now){
      const p = Math.min(1, (now - t0) / 1250);
      reveal = 1 - Math.pow(1 - p, 3);
      draw();
      if(p < 1) raf = requestAnimationFrame(step);
      else tickLoop();
    })(t0);
  }
  function tickLoop(){
    /* 极轻的“活着”的感觉：每 2.6 秒轻推最后一根 K 线 */
    setInterval(() => {
      if(document.hidden) return;
      const d = data[data.length - 1];
      d.c *= 1 + (Math.random() - 0.5) * 0.0012;
      d.h = Math.max(d.h, d.c); d.l = Math.min(d.l, d.c);
      draw();
    }, 2600);
  }

  if('IntersectionObserver' in window){
    const ob = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ play(); ob.disconnect(); } }), { threshold:.2 });
    ob.observe(canvas);
  } else play();

  new ResizeObserver(() => resize()).observe(canvas);
  resize();

  if(o.interactive){
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const i = Math.round((x - pad.l) / (W - pad.l - pad.r) * (data.length - 1));
      hover = Math.max(0, Math.min(data.length - 1, i));
      draw();
    });
    canvas.addEventListener('mouseleave', () => { hover = null; draw(); });
  }
}

/* 迷你走势线（用于卡片与索引行） */
function initSpark(canvas, seed, color){
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = synthSeries(40, seed);
  function draw(){
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const W = rect.width, H = rect.height;
    const vals = data.map(d => d.c);
    const min = Math.min(...vals), max = Math.max(...vals);
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    vals.forEach((v, i) => {
      const x = i / (vals.length - 1) * W;
      const y = H - ((v - min) / (max - min || 1)) * (H - 4) - 2;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.strokeStyle = color || cssVar('--brand');
    ctx.lineWidth = 1.2; ctx.globalAlpha = .85; ctx.stroke();
    ctx.globalAlpha = 1;
  }
  draw();
  new ResizeObserver(draw).observe(canvas);
}
