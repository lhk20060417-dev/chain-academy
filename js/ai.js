/* =====================================================================
 * Chain Academy v5 · DeepSeek 客户端
 * Key 只保存在本机 localStorage（键 ca_deepseek），请求直接从浏览器发出。
 * 没有后端、没有中转，也不会上传到本站（本站没有服务器）。
 * ===================================================================== */
'use strict';

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';
const AI_KEY = 'deepseek';

function getAIKey(){ return store.get(AI_KEY, ''); }
function setAIKey(k){ store.set(AI_KEY, (k || '').trim()); }
function hasAIKey(){ return !!getAIKey(); }

async function askDeepSeek(prompt, opts){
  const key = getAIKey();
  if(!key) throw new Error('NO_KEY');
  const o = Object.assign({ system:'', temperature:0.4, maxTokens:1800, timeout:90000 }, opts || {});
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), o.timeout);
  const messages = [];
  if(o.system) messages.push({ role:'system', content:o.system });
  messages.push({ role:'user', content:prompt });
  try{
    const res = await fetch(DEEPSEEK_URL, {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + key },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages,
        temperature: o.temperature,
        max_tokens: o.maxTokens,
        stream: false,
      }),
      signal: ctrl.signal,
    });
    const text = await res.text();
    if(!res.ok){
      let msg = '请求失败（' + res.status + '）';
      try{ const j = JSON.parse(text); msg = j.error?.message || msg; }catch(e){}
      const err = new Error(msg);
      err.status = res.status;
      throw err;
    }
    const j = JSON.parse(text);
    return (j.choices?.[0]?.message?.content || '').trim();
  } finally {
    clearTimeout(timer);
  }
}

if (typeof window !== 'undefined') {
  window.getAIKey = getAIKey;
  window.setAIKey = setAIKey;
  window.hasAIKey = hasAIKey;
  window.askDeepSeek = askDeepSeek;
}
