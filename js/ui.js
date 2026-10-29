/* =====================================================================
 * Chain Academy v4 · 站点外壳（js/ui.js）
 * 依赖：js/content.js（STAGES / EXAMS）、js/storage.js（progress / store）
 * 职责：主题、导航与页脚渲染、⌘K 搜索、滚动动效、阅读进度条、弹层与提示
 * ===================================================================== */
'use strict';

/* ---------------- 图标 ---------------- */
const ICON = {
  search:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/></svg>',
  arrow:'<svg class="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  menu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  lock:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  check:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 13 4 4L19 7"/></svg>',
  dot:'<svg width="7" height="7" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill="currentColor"/></svg>',
};

/* ---------------- 导航条目 ---------------- */
const NAV_ITEMS = [
  { key:'home',   href:'index.html',   zh:'首页',   en:'Index' },
  { key:'roadmap',href:'roadmap.html', zh:'课程图谱', en:'Roadmap' },
  { key:'library',href:'library.html', zh:'章节库',  en:'Library' },
  { key:'master', href:'master.html',  zh:'思维体系', en:'Mastery' },
  { key:'tools',  href:'tools.html',   zh:'实验室',  en:'Lab' },
  { key:'progress',href:'progress.html',zh:'进度',   en:'Progress' },
];

/* ---------------- 主题 ---------------- */
function currentTheme(){ return document.documentElement.getAttribute('data-theme') || 'obsidian'; }
function applyTheme(name, announce){
  document.documentElement.setAttribute('data-theme', name);
  store.set('theme', name);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.innerHTML = name === 'paper' ? ICON.moon : ICON.sun;
    btn.setAttribute('aria-label', name === 'paper' ? '切换到暗色主题' : '切换到纸本主题');
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', name === 'paper' ? '#F3EFE6' : '#08090B');
  if(announce) toast(name === 'paper' ? '纸本主题 · 适合长文阅读' : '黑曜石主题');
}
function initTheme(){
  const saved = store.get('theme', null);
  applyTheme(saved || 'obsidian', false);
}

/* ---------------- 页头 ---------------- */
function renderChrome(activeKey){
  initTheme();
  const navMount = document.getElementById('siteNav');
  if(navMount){
    navMount.outerHTML = `
    <header class="site-nav" id="siteNav">
      <div class="nav-inner">
        <a href="index.html" class="brand" aria-label="Chain Academy 首页">
          <span class="brand__mark" aria-hidden="true"></span>
          <span class="brand__name">Chain <b>Academy</b></span>
          <span class="brand__ver">V4</span>
        </a>
        <nav class="nav-links" aria-label="主导航">
          ${NAV_ITEMS.map(n => `<a class="navlink ${activeKey===n.key?'active':''}" href="${n.href}">${n.zh}</a>`).join('')}
        </nav>
        <div class="nav-actions">
          <button class="search-trigger" data-cmdk-open aria-label="搜索章节">
            ${ICON.search}<span>搜索</span><kbd class="kbd">⌘K</kbd>
          </button>
          <button class="icon-btn" data-theme-toggle aria-label="切换主题"></button>
          <button class="icon-btn nav-toggle" data-menu-toggle aria-label="菜单">${ICON.menu}</button>
          <a href="roadmap.html" class="btn btn--primary btn--sm" data-continue>继续学习 ${ICON.arrow}</a>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu" hidden>
      <div class="mobile-menu__inner">
        ${NAV_ITEMS.map(n => `<a href="${n.href}" class="mobile-menu__link">${n.zh}<span>${n.en}</span></a>`).join('')}
      </div>
    </div>`;
  }

  const footMount = document.getElementById('siteFooter');
  if(footMount){
    footMount.outerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand" style="margin:0 0 18px;">
              <span class="brand__mark" aria-hidden="true"></span>
              <span class="brand__name">Chain <b>Academy</b></span>
            </a>
            <p class="footer-p" style="max-width:34ch;">一个用于理解区块链与市场结构的研究型学习站。内容为公开知识的整理与教学表达，不提供任何交易服务。</p>
            <p class="footer-p" style="margin-top:14px;color:var(--warn);">虚拟货币相关业务活动在中国境内属于非法金融活动，不受法律保护。本站仅用于技术理论学习。</p>
          </div>
          <div>
            <div class="footer-h">课程</div>
            <a class="footer-a" href="roadmap.html">课程图谱</a>
            <a class="footer-a" href="library.html">章节库</a>
            <a class="footer-a" href="master.html">顶级交易思维</a>
            <a class="footer-a" href="tools.html">交易数学实验室</a>
          </div>
          <div>
            <div class="footer-h">工具</div>
            <a class="footer-a" href="progress.html">学习进度</a>
            <a class="footer-a" href="errors.html">错题复盘</a>
            <a class="footer-a" href="feedback.html">提问与反馈</a>
            <a class="footer-a" href="lab.html">复盘工作台</a>
          </div>
          <div>
            <div class="footer-h">免责声明</div>
            <p class="footer-p">本站内容仅供区块链技术理论学习与自测，不构成投资建议、要约或推荐。文中任何策略、公式与历史案例均不保证未来有效。请遵守所在地法律法规。</p>
          </div>
        </div>
        <div class="wordmark" aria-hidden="true">CHAIN ACADEMY</div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} CHAIN ACADEMY · 仅用于理论学习</span>
          <span>DESIGNED IN OBSIDIAN &amp; PAPER · V4.0</span>
        </div>
      </div>
    </footer>`;
  }

  /* 主题图标（导航刚插入，需要补画一次） */
  applyTheme(currentTheme(), false);

  /* 主题切换 */
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(currentTheme() === 'paper' ? 'obsidian' : 'paper', true));
  });

  /* 继续学习 */
  document.querySelectorAll('[data-continue]').forEach(el => {
    el.addEventListener('click', e => {
      const last = progress.lastStudy;
      if(last && typeof isUnlocked === 'function' && isUnlocked(last)){
        e.preventDefault();
        location.href = 'chapter.html?id=' + encodeURIComponent(last);
      }
    });
  });

  /* 移动端菜单 */
  const mt = document.querySelector('[data-menu-toggle]');
  const mm = document.getElementById('mobileMenu');
  if(mt && mm){
    mt.addEventListener('click', () => {
      const open = mm.hasAttribute('hidden');
      if(open){ mm.removeAttribute('hidden'); mt.innerHTML = ICON.close; document.body.style.overflow='hidden'; }
      else { mm.setAttribute('hidden',''); mt.innerHTML = ICON.menu; document.body.style.overflow=''; }
    });
  }

  initNavScroll();
  initCmdk();
  initReveals();
  syncContinueLabel();
}

function syncContinueLabel(){
  const last = progress.lastStudy;
  if(!last) return;
  const o = (typeof ORDER !== 'undefined') ? ORDER.find(x => x.ch.id === last) : null;
  if(!o) return;
  const short = o.ch.title.replace(/^第 \d+ 节：/,'');
  const label = short.length > 9 ? short.slice(0, 9) + '…' : short;
  document.querySelectorAll('[data-continue]').forEach(el => {
    el.innerHTML = `继续：${label} ${ICON.arrow}`;
  });
}

/* ---------------- 导航滚动态 ---------------- */
function initNavScroll(){
  const nav = document.querySelector('.site-nav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('solid', (window.scrollY || 0) > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

/* ---------------- 进入视口 ---------------- */
let io;
function initReveals(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(n => n.classList.add('in'));
    return;
  }
  io = io || new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold:.08, rootMargin:'0px 0px -8% 0px' });
  document.querySelectorAll('.reveal:not(.in)').forEach(n => io.observe(n));
}
function observeNew(root){
  if(!io) return;
  (root || document).querySelectorAll('.reveal:not(.in)').forEach(n => io.observe(n));
}

/* ---------------- ⌘K 搜索 ---------------- */
let cmdkIndex = 0, cmdkResults = [];
function chapterEntries(){
  if(typeof STAGES === 'undefined') return [];
  return STAGES.flatMap(s => s.chapters.map(c => ({
    id:c.id, title:c.title, stage:s.title, num:s.num, dur:c.dur, href:'chapter.html?id=' + encodeURIComponent(c.id),
  })));
}
function initCmdk(){
  if(document.getElementById('cmdk')) return;
  const el = document.createElement('div');
  el.id = 'cmdk'; el.className = 'cmdk'; el.setAttribute('role','dialog'); el.setAttribute('aria-modal','true');
  el.innerHTML = `
    <div class="cmdk__box">
      <input class="cmdk__input" id="cmdkInput" placeholder="搜索章节、阶段或工具…" autocomplete="off" spellcheck="false">
      <div class="cmdk__list" id="cmdkList"></div>
      <div class="cmdk__foot"><span>↑ ↓ 选择</span><span>↵ 打开</span><span>ESC 关闭</span></div>
    </div>`;
  document.body.appendChild(el);

  const input = el.querySelector('#cmdkInput');
  const list = el.querySelector('#cmdkList');
  const staticPages = [
    { k:'页面', title:'课程图谱', href:'roadmap.html' },
    { k:'页面', title:'章节库', href:'library.html' },
    { k:'页面', title:'顶级交易思维', href:'master.html' },
    { k:'页面', title:'交易数学实验室', href:'tools.html' },
    { k:'页面', title:'学习进度', href:'progress.html' },
    { k:'页面', title:'错题复盘', href:'errors.html' },
  ];
  const all = () => [...chapterEntries().map(c => ({ k:c.num + ' 阶段', title:c.title, sub:c.stage, href:c.href })), ...staticPages];

  function render(q){
    const kw = q.trim().toLowerCase();
    const pool = all();
    cmdkResults = !kw ? pool.slice(0, 9) : pool.filter(x => (x.title + ' ' + (x.sub||'')).toLowerCase().includes(kw)).slice(0, 40);
    cmdkIndex = 0;
    if(!cmdkResults.length){ list.innerHTML = '<div class="cmdk__empty">没有匹配结果</div>'; return; }
    list.innerHTML = cmdkResults.map((r,i) => `
      <div class="cmdk__item ${i===0?'on':''}" data-i="${i}">
        <span class="k">${esc(r.k)}</span>
        <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${hl(r.title, kw)}</span>
        ${r.sub ? `<span class="micro" style="letter-spacing:.08em;">${esc(r.sub)}</span>` : ''}
      </div>`).join('');
    [...list.children].forEach(node => {
      node.addEventListener('mouseenter', () => setActive(+node.dataset.i));
      node.addEventListener('click', () => go(+node.dataset.i));
    });
  }
  function hl(text, kw){
    if(!kw) return esc(text);
    const i = text.toLowerCase().indexOf(kw);
    if(i < 0) return esc(text);
    return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+kw.length)) + '</mark>' + esc(text.slice(i+kw.length));
  }
  function setActive(i){
    cmdkIndex = i;
    [...list.children].forEach((n,idx) => n.classList.toggle('on', idx===i));
    const node = list.children[i];
    if(node && node.scrollIntoView) node.scrollIntoView({ block:'nearest' });
  }
  function go(i){
    const r = cmdkResults[i];
    if(r) location.href = r.href;
  }
  function open(){ el.classList.add('open'); input.value=''; render(''); setTimeout(()=>input.focus(),30); }
  function close(){ el.classList.remove('open'); }

  document.querySelectorAll('[data-cmdk-open]').forEach(b => b.addEventListener('click', open));
  document.addEventListener('keydown', e => {
    if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); el.classList.contains('open') ? close() : open(); }
    if(e.key === 'Escape') close();
    if(!el.classList.contains('open')) return;
    if(e.key === 'ArrowDown'){ e.preventDefault(); setActive(Math.min(cmdkIndex+1, cmdkResults.length-1)); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); setActive(Math.max(cmdkIndex-1, 0)); }
    if(e.key === 'Enter'){ e.preventDefault(); go(cmdkIndex); }
  });
  input.addEventListener('input', () => render(input.value));
  el.addEventListener('click', e => { if(e.target === el) close(); });
}

/* ---------------- 阅读进度条 ---------------- */
function initReadProgress(target){
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  document.body.appendChild(bar);
  const onScroll = () => {
    const rect = target.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const done = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
    bar.style.width = (done * 100).toFixed(2) + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll);
}

/* ---------------- Toast / Modal ---------------- */
let toastTimer;
function toast(msg){
  let tt = document.getElementById('toast');
  if(!tt){ tt = document.createElement('div'); tt.id = 'toast'; document.body.appendChild(tt); }
  tt.textContent = msg;
  requestAnimationFrame(() => tt.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => tt.classList.remove('show'), 2800);
}
function openModal(html){
  let mask = document.getElementById('globalModal');
  if(!mask){
    mask = document.createElement('div');
    mask.id = 'globalModal'; mask.className = 'modal-mask';
    mask.innerHTML = '<div class="modal-box" style="padding:clamp(22px,4vw,40px)" id="globalModalBody"></div>';
    document.body.appendChild(mask);
    mask.addEventListener('click', e => { if(e.target === mask) closeModal(); });
  }
  document.getElementById('globalModalBody').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:20px;">
      <div class="micro" style="color:var(--brand);">RISK NOTICE</div>
      <button class="icon-btn" onclick="closeModal()" aria-label="关闭">${ICON.close}</button>
    </div>` + html;
  mask.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const mask = document.getElementById('globalModal');
  if(mask) mask.classList.remove('open');
  if(!document.getElementById('cmdk') || !document.getElementById('cmdk').classList.contains('open')) document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ---------------- 数字滚动 ---------------- */
function countUp(node, to, opts){
  const o = Object.assign({ dur:1100, decimals:0 }, opts || {});
  const from = 0, start = performance.now();
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(reduce){ node.textContent = to.toLocaleString('en-US',{minimumFractionDigits:o.decimals,maximumFractionDigits:o.decimals}); return; }
  function tick(now){
    const p = Math.min(1, (now-start)/o.dur);
    const e = 1 - Math.pow(1-p, 3);
    node.textContent = (from + (to-from)*e).toLocaleString('en-US',{minimumFractionDigits:o.decimals,maximumFractionDigits:o.decimals});
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------- 启动 ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  countUpNodes();
});
function countUpNodes(){
  document.querySelectorAll('[data-count]').forEach(n => {
    const v = parseFloat(n.dataset.count);
    const d = parseInt(n.dataset.decimals || '0', 10);
    if(!isNaN(v)) countUp(n, v, { decimals:d });
  });
}
