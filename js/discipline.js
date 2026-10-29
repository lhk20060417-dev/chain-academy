/* =====================================================================
 * Chain Academy v5 · 交易纪律数据层
 * 全部保存在 localStorage（键 ca_discipline），不上传任何服务器。
 * ===================================================================== */
'use strict';

const DISC_DEFAULT = {
  rules: [
    { id:'r1', text:'单笔风险不超过账户的 0.75%', note:'仓位由止损距离反推，而不是由信心决定' },
    { id:'r2', text:'下单前必须写好止损与失效条件', note:'没有失效条件的交易不做' },
    { id:'r3', text:'单日亏损达到 3% 即停止交易', note:'触发后关闭行情软件，次日再复盘' },
    { id:'r4', text:'同时持有的相关性仓位不超过 3 个', note:'相关性高的标的按一个风险单位计算' },
    { id:'r5', text:'不在情绪剧烈波动时下单', note:'睡眠不足、愤怒、兴奋时只观察不操作' },
  ],
  checklist: [
    { id:'c1', text:'确认今日宏观日历与重大事件' },
    { id:'c2', text:'写下每笔交易的理由与失效条件' },
    { id:'c3', text:'检查相关性叠加后的总风险' },
    { id:'c4', text:'设置条件单，盘中不改止损' },
    { id:'c5', text:'复盘昨日交易并记录情绪状态' },
  ],
  params: { risk:0.75, dailyLoss:3, maxPos:3, leverage:1 },
  logs: {},
  violations: [],
};

const DISC_KEY = 'discipline';
function loadDisc(){
  const d = store.get(DISC_KEY, null);
  if(!d) return JSON.parse(JSON.stringify(DISC_DEFAULT));
  return {
    rules: d.rules && d.rules.length ? d.rules : DISC_DEFAULT.rules.slice(),
    checklist: d.checklist && d.checklist.length ? d.checklist : DISC_DEFAULT.checklist.slice(),
    params: Object.assign({}, DISC_DEFAULT.params, d.params || {}),
    logs: d.logs || {},
    violations: d.violations || [],
  };
}
function saveDisc(d){ store.set(DISC_KEY, d); }
function todayStr(offset){
  const t = new Date();
  if(offset) t.setDate(t.getDate() + offset);
  /* 使用本地时区日期，避免 UTC 与本地日期错位 */
  const local = new Date(t.getTime() - t.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0,10);
}
function todayLog(d){
  const k = todayStr();
  d.logs[k] = d.logs[k] || { done:[], note:'' };
  return d.logs[k];
}
function todayRate(d){
  const log = todayLog(d);
  if(!d.checklist.length) return 0;
  return Math.round(log.done.length / d.checklist.length * 100);
}
function discStreak(d){
  let streak = 0;
  for(let i = 0; i < 90; i++){
    const k = todayStr(-i);
    const log = d.logs[k];
    const full = log && log.done.length >= d.checklist.length && d.checklist.length > 0;
    if(full) streak++;
    else if(i === 0) continue;      /* 今天还没做完不算断 */
    else break;
  }
  return streak;
}
function last14(d){
  const out = [];
  for(let i = 13; i >= 0; i--){
    const k = todayStr(-i);
    const log = d.logs[k];
    out.push({ date:k, full: !!(log && log.done.length >= d.checklist.length), today: i === 0 });
  }
  return out;
}
if (typeof window !== 'undefined') {
  window.DISC_DEFAULT = DISC_DEFAULT;
  window.loadDisc = loadDisc;
  window.saveDisc = saveDisc;
  window.todayStr = todayStr;
  window.todayLog = todayLog;
  window.todayRate = todayRate;
  window.discStreak = discStreak;
  window.last14 = last14;
}
