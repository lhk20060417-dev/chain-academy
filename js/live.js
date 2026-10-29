/* =====================================================================
 * Chain Academy v5.1 · 实时数据层
 * 数据源（均为公开接口，仅信息展示）：
 *   - 盘面：data-api.binance.vision（公开行情 API）
 *   - 情绪：api.alternative.me（恐惧贪婪指数）
 *   - 链上：api.blockchair.com / mempool.space
 *   - 消息：Cointelegraph / CoinDesk RSS，经 api.allorigins.win 公共代理
 * 说明：任何接口失败都不影响页面其他部分；会优先使用上次缓存。
 * 本站不提供交易功能，不构成投资建议。
 * ===================================================================== */
'use strict';

const LIVE = {
  prices: null,      /* { BTC:{price,change}, ETH:{...}, ... } */
  spark: null,       /* BTC 1m 收盘价数组 */
  fng: null,         /* { value, label } */
  chain: null,       /* { blocks, tx, fee } */
  news: null,        /* [{ title, link, source, date, level, dir }] */
  ts: {},
};

const LIVE_SYMBOLS = [
  { sym:'BTC', pair:'BTCUSDT' },
  { sym:'ETH', pair:'ETHUSDT' },
  { sym:'SOL', pair:'SOLUSDT' },
];
const LIVE_CACHE_KEY = 'live_cache';

function liveReadCache(){
  const c = store.get(LIVE_CACHE_KEY, null);
  if(!c) return;
  if(c.prices) LIVE.prices = c.prices;
  if(c.spark) LIVE.spark = c.spark;
  if(c.fng) LIVE.fng = c.fng;
  if(c.chain) LIVE.chain = c.chain;
  if(c.news) LIVE.news = c.news;
  if(c.ts) LIVE.ts = c.ts;
}
function liveSaveCache(){
  store.set(LIVE_CACHE_KEY, {
    prices: LIVE.prices, spark: LIVE.spark, fng: LIVE.fng, chain: LIVE.chain,
    news: LIVE.news, ts: LIVE.ts,
  });
}
function liveEmit(){
  window.dispatchEvent(new CustomEvent('live:update', { detail: LIVE }));
}

async function liveFetch(url, opts){
  const o = Object.assign({ timeout: 9000, json:true }, opts || {});
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), o.timeout);
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers: o.headers || {} });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    return o.json ? await res.json() : await res.text();
  } finally {
    clearTimeout(timer);
  }
}

/* ---------------- 盘面 ---------------- */
async function refreshPrices(){
  const q = encodeURIComponent(JSON.stringify(LIVE_SYMBOLS.map(s => s.pair)));
  const arr = await liveFetch('https://data-api.binance.vision/api/v3/ticker/24hr?symbols=' + q);
  const out = {};
  arr.forEach(x => {
    const s = LIVE_SYMBOLS.find(y => y.pair === x.symbol);
    if(s) out[s.sym] = { price: parseFloat(x.lastPrice), change: parseFloat(x.priceChangePercent) };
  });
  LIVE.prices = out; LIVE.ts.prices = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshSpark(){
  const arr = await liveFetch('https://data-api.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=90');
  LIVE.spark = arr.map(k => parseFloat(k[4]));
  LIVE.ts.spark = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshFng(){
  const j = await liveFetch('https://api.alternative.me/fng/?limit=14');
  const map = { 'Extreme Fear':'极度恐惧', Fear:'恐惧', Neutral:'中性', Greed:'贪婪', 'Extreme Greed':'极度贪婪' };
  LIVE.fng = {
    value: parseInt(j.data[0].value, 10),
    label: map[j.data[0].value_classification] || j.data[0].value_classification,
    prev: j.data[1] ? parseInt(j.data[1].value, 10) : null,
    history: j.data.slice(0, 14).reverse().map(x => parseInt(x.value, 10)),
  };
  LIVE.ts.fng = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshChain(){
  const chain = LIVE.chain || {};
  try{
    const j = await liveFetch('https://api.blockchair.com/bitcoin/stats');
    const d = j.data || {};
    if(d.blocks) chain.blocks = d.blocks;
    if(d.transactions_24h) chain.tx = d.transactions_24h;
  }catch(e){}
  try{
    const j = await liveFetch('https://mempool.space/api/v1/fees/recommended');
    if(j.fastestFee) chain.fee = j.fastestFee;
  }catch(e){}
  LIVE.chain = chain; LIVE.ts.chain = Date.now();
  liveSaveCache(); liveEmit();
}

/* ---------------- 消息（RSS + 关键词初筛） ---------------- */
const NEWS_FEEDS = [
  { name:'Cointelegraph', url:'https://cointelegraph.com/rss' },
  { name:'CoinDesk', url:'https://www.coindesk.com/arc/outboundfeeds/rss/' },
];
const NEWS_LEVEL_WORDS = {
  S: ['federal reserve','fomc','cpi','rate cut','rate hike','sec sues','sec charges','ban','banned','hack','exploit','bankrupt','insolven','halts withdrawals','emergency','war','default','tariff'],
  A: ['etf','regulation','lawsuit','settlement','liquidat','whale','treasury','blackrock','microstrategy','approval','rejected','outflow','inflow','suspend','halt','delist','probe','investigat','reserve','stablecoin'],
  B: ['partnership','launch','listing','integration','funding','raise','acquisition','mainnet','airdrop','staking','layer 2','layer-2','all-time high','record high','valuation','ipo','jumps','surges','rally','plunge','slides','drops'],
};
const NEWS_POS = ['approve','approval','inflow','surge','jump','rally','record','high','buy','adopt','partnership','upgrade','launch','bullish','gain','rise','climb','soar','raise','eye','bet on','expand'];
const NEWS_NEG = ['sue','lawsuit','ban','hack','exploit','outflow','crash','plunge','slide','drop','fall','decline','sink','halt','suspend','liquidat','bearish','fraud','bankrupt','reject','probe','risk'];
function hasWord(text, w){
  const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try{
    return new RegExp('\\b' + esc + '(s|es|ed|ing)?\\b', 'i').test(text);
  }catch(e){
    return text.indexOf(w) !== -1;
  }
}
function classifyHeadline(title){
  const t = title.toLowerCase();
  let level = 'C';
  for(const lv of ['S','A','B']){
    if(NEWS_LEVEL_WORDS[lv].some(w => hasWord(t, w))){ level = lv; break; }
  }
  let score = 0;
  NEWS_POS.forEach(w => { if(hasWord(t, w)) score++; });
  NEWS_NEG.forEach(w => { if(hasWord(t, w)) score--; });
  const dir = score > 0 ? 'bull' : score < 0 ? 'bear' : 'neutral';
  return { level, dir };
}
function parseRss(xml, source){
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  const items = [...doc.querySelectorAll('item')].slice(0, 12);
  return items.map(it => {
    const title = (it.querySelector('title')?.textContent || '').trim();
    const link = (it.querySelector('link')?.textContent || '').trim();
    const date = it.querySelector('pubDate')?.textContent || '';
    return Object.assign({ title, link, source, date: date ? new Date(date).toISOString() : '' }, classifyHeadline(title));
  }).filter(x => x.title && x.link);
}
function liveDelay(ms){ return new Promise(r => setTimeout(r, ms)); }
/* 公共 CORS 代理：并发竞速，谁先返回合法 RSS 用谁 */
function fetchViaProxy(feedUrl){
  const enc = encodeURIComponent(feedUrl);
  const jobs = [
    liveFetch('https://proxy.corsfix.com/?' + feedUrl, { json:false, timeout:9000 }),
    liveFetch('https://api.allorigins.win/raw?url=' + enc, { json:false, timeout:9000 }),
    liveFetch('https://api.allorigins.win/get?url=' + enc, { timeout:9000 }).then(j => (j && j.contents) || ''),
  ];
  return Promise.any(jobs.map(p => p.then(xml => {
    if(!xml || xml.indexOf('<rss') === -1) throw new Error('bad');
    return xml;
  })));
}
async function fetchFeedXml(feed){
  try{
    return await fetchViaProxy(feed.url);
  }catch(e){
    await liveDelay(1200);
    return await fetchViaProxy(feed.url);
  }
}
async function refreshNews(){
  let all = [];
  let ok = false;
  const jobs = NEWS_FEEDS.map(async f => {
    try{
      const xml = await fetchFeedXml(f);
      if(!xml || xml.indexOf('<rss') === -1) return;
      const items = parseRss(xml, f.name);
      if(!items.length) return;
      ok = true;
      all = all.concat(items);
      const seen = new Set();
      LIVE.news = all
        .filter(x => { if(seen.has(x.title)) return false; seen.add(x.title); return true; })
        .sort((a,b) => (b.date || '').localeCompare(a.date || ''))
        .slice(0, 18);
      LIVE.ts.news = Date.now();
      liveSaveCache(); liveEmit();
    }catch(e){ /* 单个源失败忽略 */ }
  });
  await Promise.allSettled(jobs);
  if(!ok){
    window.dispatchEvent(new CustomEvent('live:news-fail'));
  }
}

function fmtMoney(v){
  if(v == null || isNaN(v)) return '—';
  if(v >= 1000) return v.toLocaleString('en-US', { maximumFractionDigits:0 });
  if(v >= 1) return v.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 });
  return v.toLocaleString('en-US', { maximumFractionDigits:4 });
}
function fmtPct(v){
  if(v == null || isNaN(v)) return '—';
  return (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
}
function timeAgo(iso){
  if(!iso) return '';
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if(diff < 60) return '刚刚';
  if(diff < 3600) return Math.floor(diff/60) + ' 分钟前';
  if(diff < 86400) return Math.floor(diff/3600) + ' 小时前';
  return Math.floor(diff/86400) + ' 天前';
}

let liveStarted = false;
function startLive(opts){
  const o = Object.assign({ prices:true, spark:true, fng:true, chain:true, news:true, interval:15000 }, opts || {});
  liveReadCache();
  liveEmit();
  if(liveStarted) return;
  liveStarted = true;
  const safe = fn => () => fn().catch(() => {});
  if(o.prices) safe(refreshPrices)();
  if(o.spark) safe(refreshSpark)();
  if(o.fng) safe(refreshFng)();
  if(o.chain) safe(refreshChain)();
  if(o.news) safe(refreshNews)();
  setInterval(() => {
    if(document.hidden) return;
    if(o.prices) safe(refreshPrices)();
    if(o.fng) safe(refreshFng)();
  }, o.interval);
  setInterval(() => {
    if(document.hidden) return;
    if(o.spark) safe(refreshSpark)();
  }, 60000);
  setInterval(() => { if(!document.hidden && o.news) safe(refreshNews)(); }, 10 * 60 * 1000);
  setInterval(() => { if(!document.hidden && o.chain) safe(refreshChain)(); }, 120000);
}

if (typeof window !== 'undefined') {
  window.LIVE = LIVE;
  window.startLive = startLive;
  window.refreshNews = refreshNews;
  window.fmtMoney = fmtMoney;
  window.fmtPct = fmtPct;
  window.timeAgo = timeAgo;
}
