/* =====================================================================
 * Chain Academy · 动效与交互（js/animate.js）
 * 规范：克制、服务叙事。导航透明→滚动固化；进入视口渐入+小幅上浮。
 * ===================================================================== */
'use strict';

/* 导航：初始透明，滚动超过 80px 平滑过渡为半透明深色背景 */
function initNavScroll(){
  const nav = document.querySelector('.site-nav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('solid', (window.scrollY || 0) > 80);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

/* 区块进入视口：渐入 + 小幅 Y 轴上浮 */
const revealIO = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting){ en.target.classList.add('in'); revealIO.unobserve(en.target); }
}), { threshold:.12 });
function watchReveals(){
  document.querySelectorAll('.reveal:not(.in)').forEach(n => revealIO.observe(n));
}

/* Toast */
let toastTimer;
function toast(msg){
  let tt = document.getElementById('toast');
  if(!tt){ tt = document.createElement('div'); tt.id = 'toast'; document.body.appendChild(tt); }
  tt.textContent = msg; tt.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => tt.classList.remove('show'), 2600);
}

/* 弹层 */
function openModal(html){
  let mask = document.getElementById('globalModal');
  if(!mask){
    mask = document.createElement('div');
    mask.id = 'globalModal'; mask.className = 'modal-mask';
    mask.innerHTML = '<div class="modal-box" style="padding:32px" id="globalModalBody"></div>';
    document.body.appendChild(mask);
    mask.addEventListener('click', e => { if(e.target === mask) closeModal(); });
  }
  document.getElementById('globalModalBody').innerHTML =
    `<div class="flex justify-between items-start mb-5">
       <div class="tag-brand">RISK NOTICE</div>
       <button onclick="closeModal()" class="text-xs px-3 py-1.5 rounded-md" style="border:1px solid var(--line-strong);color:var(--dim)">✕</button>
     </div>` + html;
  mask.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const mask = document.getElementById('globalModal');
  if(mask) mask.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* 启动 */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  watchReveals();
  applyLang();
  renderFooter();
});
