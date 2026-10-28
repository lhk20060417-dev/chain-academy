/* =====================================================================
 * Chain Academy · 存储与领域逻辑（js/storage.js）
 * 依赖：先加载 js/content.js（提供 STAGES / EXAMS 全局变量）
 * 职责：localStorage 存取、线性解锁、i18n、共享渲染助手
 * ===================================================================== */
'use strict';

/* ---------- localStorage 存储层（键前缀 ca_） ---------- */
const store = {
  get(k, d){ try{ const v = JSON.parse(localStorage.getItem('ca_'+k)); return v==null?d:v; }catch(e){ return d; } },
  set(k, v){ localStorage.setItem('ca_'+k, JSON.stringify(v)); },
};
let progress = store.get('progress', { chapters:{}, exams:{}, wrong:[], stars:[], answers:0 });
const saveProgress = () => store.set('progress', progress);

/* ---------- 章节顺序与线性解锁 ---------- */
const ORDER = STAGES.flatMap(s => s.chapters.map(c => ({ stage: s, ch: c })));
ORDER.forEach((o, i) => { o.index = i; });
function chapterState(chId){
  if(progress.chapters[chId] && progress.chapters[chId].passed) return 'done';
  const idx = ORDER.findIndex(o => o.ch.id === chId);
  if(idx === 0) return 'active';
  const prev = ORDER[idx-1];
  return (progress.chapters[prev.ch.id] && progress.chapters[prev.ch.id].passed) ? 'active' : 'locked';
}
const isUnlocked = chId => chapterState(chId) !== 'locked';
function stageDone(stage){ return stage.chapters.every(c => progress.chapters[c.id] && progress.chapters[c.id].passed); }
function examState(exam){
  const stage = STAGES.find(s => s.id === exam.stageId);
  if(progress.exams[exam.stageId] && progress.exams[exam.stageId].passed) return 'done';
  return stageDone(stage) ? 'active' : 'locked';
}
function overallPct(){
  const doneCh = ORDER.filter(o => progress.chapters[o.ch.id] && progress.chapters[o.ch.id].passed).length;
  const doneEx = EXAMS.filter(e => progress.exams[e.stageId] && progress.exams[e.stageId].passed).length;
  return Math.round((doneCh + doneEx) / (ORDER.length + EXAMS.length) * 100);
}

/* ---------- 工具 ---------- */
const $id = id => document.getElementById(id);
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtN(n, d){ return (n==null||isNaN(n))?'—':Number(n).toLocaleString('en-US',{minimumFractionDigits:d==null?2:d,maximumFractionDigits:d==null?2:d}); }

/* ---------- i18n（仅界面文案；正文内容请在 content.js 中翻译） ---------- */
const I18N = {
  zh: {
    navHome:'首页', navRoadmap:'学习路线', navLibrary:'章节库', navLab:'实操实验室', navProgress:'进度总览', navErrors:'错题复盘', navFeedback:'答疑反馈',
    ctaContinue:'继续上次学习',
    locked:'未解锁', active:'进行中', done:'已完成', start:'开始学习', retake:'重新自测', read:'阅读', pass:'合格',
    backLibrary:'返回章节库', prevCh:'← 上一章', nextCh:'下一章 →', quizTitle:'配套自测', submitQuiz:'提交并判分',
    yourScore:'得分', quizPass:'恭喜，通过本章自测！已解锁下一章。', quizFail:'未达到 60 分，看看解析再试一次。',
    markRead:'✓ 完成本节学习', readDone:'本节已标记为完成，继续加油！',
    examStart:'开始阶段考核', examLocked:'完成本阶段全部章节后解锁', examScore:'考核得分', examPass:'考核通过，阶段完成！', examFail:'未达 70 分，可返回章节复习后重考。',
    stageExam:'阶段考核', collapse:'收拢', expand:'展开',
    emptyTitle:'这里还空空如也', libEmpty:'没有符合筛选条件的章节', erEmpty:'暂无错题，保持这个状态！',
    retry:'重新作答', mastered:'已掌握', filterAll:'全部阶段', filterPending:'只看未掌握',
    saved:'已保存到本地', needQuestion:'请填写问题描述', pickChapter:'请选择章节',
    fbChapter:'当前章节', fbQuestion:'问题描述', fbNote:'备注（选填）', fbSubmit:'保存疑问',
    riskSummary:'虚拟货币相关业务活动在国内属于非法金融活动，不受法律保护。本站仅用于区块链技术理论学习，不提供、不引导任何交易行为。',
    disclaimer:'免责声明', viewFull:'查看完整监管说明',
  },
  en: {
    navHome:'Home', navRoadmap:'Roadmap', navLibrary:'Chapters', navLab:'Trade Lab', navProgress:'Progress', navErrors:'Error Review', navFeedback:'Feedback',
    ctaContinue:'Continue Last Study',
    locked:'Locked', active:'In Progress', done:'Completed', start:'Start', retake:'Retake Quiz', read:'Read', pass:'Pass',
    backLibrary:'Back to Library', prevCh:'← Prev', nextCh:'Next →', quizTitle:'Chapter Quiz', submitQuiz:'Submit & Grade',
    yourScore:'Score', quizPass:'Passed! Next chapter unlocked.', quizFail:'Below 60 — review the explanations and try again.',
    markRead:'✓ Mark as Studied', readDone:'Marked as studied. Keep going!',
    examStart:'Start Final Assessment', examLocked:'Finish all chapters in this stage first', examScore:'Exam score', examPass:'Stage passed!', examFail:'Below 70 — review and retake.',
    stageExam:'Final Assessment', collapse:'Collapse', expand:'Expand',
    emptyTitle:'Nothing here yet', libEmpty:'No chapters match the filter', erEmpty:'No errors yet — keep it that way!',
    retry:'Re-answer', mastered:'Mastered', filterAll:'All stages', filterPending:'Pending only',
    saved:'Saved locally', needQuestion:'Please write your question', pickChapter:'Select a chapter',
    fbChapter:'Current chapter', fbQuestion:'Your question', fbNote:'Notes (optional)', fbSubmit:'Save Question',
    riskSummary:'Virtual-currency-related activities are illegal financial activities in China and are not protected by law. This site is for blockchain theory study only; no trading is provided or encouraged.',
    disclaimer:'Disclaimer', viewFull:'View full regulation notice',
  },
};
let lang = store.get('lang', 'zh');
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang; store.set('lang', lang); applyLang();
}));

/* ---------- 共享 UI：页头页脚渲染 ---------- */
function renderNav(active){
  const links = [
    ['index.html','navHome'],['roadmap.html','navRoadmap'],['library.html','navLibrary'],
    ['lab.html','navLab'],['progress.html','navProgress'],['errors.html','navErrors'],['feedback.html','navFeedback'],
  ];
  document.querySelectorAll('.nav-links-slot').forEach(slot => {
    slot.innerHTML = links.map(l => `<a class="navlink ${active===l[1]?'active':''}" href="${l[0]}">${t(l[1])}</a>`).join('');
  });
  document.querySelectorAll('.cta-continue').forEach(b => {
    b.textContent = t('ctaContinue');
    b.onclick = e => {
      const last = progress.lastStudy;
      if(last && isUnlocked(last)){ e.preventDefault(); location.href = 'chapter.html?id=' + encodeURIComponent(last); }
      else location.href = 'roadmap.html';
    };
  });
  document.querySelectorAll('.lang-sw').forEach(b => {
    b.textContent = b.dataset.lang === 'zh' ? '中文' : 'EN';
  });
}
function renderFooter(){
  document.querySelectorAll('.footer-slot').forEach(slot => {
    slot.innerHTML = `
    <footer class="site-footer">
      <div class="container-x">
        <div class="footer-grid">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-md flex items-center justify-center text-white font-extrabold text-sm" style="background:linear-gradient(135deg,#0f6f83,#155e97)">C</span>
              <span class="font-bold text-sm">Chain<span style="color:var(--brand)">Academy</span></span>
            </div>
            <p class="footer-p mt-4">${t('riskSummary')}</p>
          </div>
          <div>
            <div class="footer-h" data-i18n="disclaimer">${t('disclaimer')}</div>
            <p class="footer-p">本站为区块链技术理论知识学习平台，所有内容仅供学习参考，不构成投资建议。本站不提供行情、交易、合约、交易所、钱包充提等任何功能与外部链接。</p>
          </div>
          <div>
            <div class="footer-h">SITEMAP</div>
            <a class="footer-a" href="roadmap.html">${t('navRoadmap')}</a>
            <a class="footer-a" href="library.html">${t('navLibrary')}</a>
            <a class="footer-a" href="progress.html">${t('navProgress')}</a>
            <a class="footer-a" href="lab.html">${t('navLab')}</a>
            <a class="footer-a" href="feedback.html">${t('navFeedback')}</a>
            <p class="footer-p mt-4">Language / 语言：
              <a href="javascript:void 0" data-lang="zh" class="footer-a" style="display:inline">中文</a> ·
              <a href="javascript:void 0" data-lang="en" class="footer-a" style="display:inline">EN</a>
            </p>
          </div>
        </div>
        <div class="copyright">© 2026 Chain Academy · 仅用于区块链技术理论学习 · v2.0 Multi-Page</div>
      </div>
    </footer>`;
    slot.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
      lang = b.dataset.lang; store.set('lang', lang); location.reload();
    }));
  });
}
