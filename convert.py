#!/usr/bin/env python3
"""把 crypto-learning 旧站的全部 md 内容移植为 Chain Academy 的 content.js"""
import re, json, os, html

SRC = os.path.join(os.path.dirname(__file__), '..', 'crypto-learning')
OUT = os.path.join(os.path.dirname(__file__), 'js', 'content.js')

STAGE_DEFS = [
  dict(dir='01-basics', id='s1', num='01', title='认知地基', en='FOUNDATIONS', risky=False, quiz='10-quiz',
       chapters=['01-money','02-blockchain','03-bitcoin','04-ethereum','05-wallet','06-exchange','07-onchain','08-stablecoin','09-security']),
  dict(dir='02-trading', id='s2', num='02', title='交易基础', en='TRADING BASICS', risky=True, quiz='08-quiz',
       chapters=['01-spot','02-kline','03-support','04-indicators','05-position','06-risk','07-psychology']),
  dict(dir='03-strategies', id='s3', num='03', title='交易策略全集', en='STRATEGIES', risky=True, quiz='12-quiz',
       chapters=['01-trend','02-breakout','03-pullback','04-grid','05-dca','06-arbitrage','07-hedge','08-martingale','09-turtle','10-styles','11-quant']),
  dict(dir='04-advanced', id='s4', num='04', title='进阶与生态', en='ADVANCED & ECOSYSTEM', risky=False, quiz='08-quiz',
       chapters=['01-defi','02-nft','03-layer2','04-bridge','05-stablecoin-mech','06-regulation','07-tokenomics']),
  dict(dir='05-practice', id='s5', num='05', title='实战与复盘', en='PRACTICE & REVIEW', risky=True, quiz=None,
       chapters=['01-paper-trading','02-small-real','03-journal','04-review','05-iteration']),
  dict(dir='06-indicators', id='s6', num='06', title='指标与理论大全', en='INDICATORS & THEORIES', risky=True, quiz=None,
       chapters=['01-liquidity','02-rsi','03-macd','04-bollinger','05-left-right-trading','06-dow-theory','07-gann-theory','08-ma-granville','09-adx','10-kdj','11-stoch-wr','12-cci','13-obv','14-elliott','15-fibonacci','16-wyckoff','17-chanlun','18-darvas-box','19-trendline','20-gap','21-divergence','22-sar-ichimoku']),
]

def read_md(stage_dir, name):
    p = os.path.join(SRC, stage_dir, name + '.md')
    with open(p, encoding='utf-8') as f:
        txt = f.read()
    txt = re.sub(r'^---.*?---\s*', '', txt, flags=re.S)  # 去 front matter
    return txt.strip()

def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<!\w)`([^`]+)`(?!\w)', r'<code>\1</code>', s)
    # 链接：外链去引导化（保留文字），内部锚点保留
    def link(m):
        label, url = m.group(1), m.group(2)
        if url.startswith('http'): return label
        return f'<a href="{url}" style="color:#4dd0e1">{label}</a>'
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link, s)
    return s

def md_to_html(md):
    lines = md.split('\n')
    out, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1; continue
        if ln.startswith('#### '): out.append(f'<h4>{inline(ln[5:])}</h4>'); i += 1
        elif ln.startswith('### '): out.append(f'<h4>{inline(ln[4:])}</h4>'); i += 1
        elif ln.startswith('## '): out.append(f'<h4>{inline(ln[3:])}</h4>'); i += 1
        elif ln.startswith('# '): i += 1  # 标题（与卡片标题重复，略）
        elif re.match(r'^[-*] ', ln):
            items = []
            while i < len(lines) and re.match(r'^[-*] ', lines[i]):
                items.append(f'<li>{inline(lines[i][2:])}</li>'); i += 1
            out.append('<ul>' + ''.join(items) + '</ul>')
        elif re.match(r'^\d+[.、] ', ln):
            items = []
            while i < len(lines) and re.match(r'^\d+[.、] ', lines[i]):
                items.append(f'<li>{inline(re.sub(chr(94)+r"\d+[.、] ","",lines[i]))}</li>'); i += 1
            out.append('<ol>' + ''.join(items) + '</ol>')
        elif ln.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                if not re.match(r'^\|[\s:-]+\|', lines[i]):
                    cells = [c.strip() for c in lines[i].strip('|').split('|')]
                    rows.append(cells)
                i += 1
            if rows:
                t = '<table style="width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem"><thead><tr>' + \
                    ''.join(f'<th style="text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7">{inline(c)}</th>' for c in rows[0]) + \
                    '</tr></thead><tbody>' + \
                    ''.join('<tr>' + ''.join(f'<td style="padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8">{inline(c)}</td>' for c in r) + '</tr>' for r in rows[1:]) + '</tbody></table>'
                out.append(t)
        elif ln.startswith('>'):
            out.append(f'<p style="border-left:2px solid rgba(77,208,225,.4);padding-left:1rem;color:#8ba3c7">{inline(ln.lstrip("> ").strip())}</p>'); i += 1
        elif ln.startswith('<') or ln.startswith('<!'):  # 原生标签（details/img 等）整块保留
            buf = [ln]; i += 1
            while i < len(lines) and lines[i].strip() and (lines[i].startswith('<') or lines[i].startswith(' ')):
                buf.append(lines[i]); i += 1
            out.append('\n'.join(buf))
        else:
            buf = [ln]; i += 1
            while i < len(lines) and lines[i].strip() and not re.match(r'^(#{1,4} |[-*] |\d+[.、] |\||>| )', lines[i]) and not lines[i].startswith('<'):
                buf.append(lines[i]); i += 1
            out.append(f'<p>{inline(" ".join(x.strip() for x in buf))}</p>')
    return '\n'.join(out)

def parse_quiz(md):
    """解析选择题（A-D 选项）与判断题（正确/错误）"""
    md = md.split('简答题')[0]
    blocks = re.findall(r'\*\*(\d+)[.、]\s*(.+?)\*\*\s*\n(.*?)(?=\n\*\*\d+[.、]|\n##|\Z)', md, flags=re.S)
    qs = []
    for num, q, body in blocks:
        opts_raw = re.findall(r'^-\s*([A-D])[.、]\s*(.+)$', body, flags=re.M)
        ans = re.search(r'答案[:：]\s*([A-D])', body)
        tf = re.search(r'答案[:：]\s*(正确|错误|对|错)', body)
        exp = re.search(r'解析[:：]\s*(.+?)(?:\n|$)', body, flags=re.S)
        e = exp.group(1).strip().replace('\n', ' ')[:220] if exp else ''
        q = re.sub(r'\s+', ' ', q).strip()
        if len(opts_raw) >= 2 and ans:
            qs.append(dict(q=q, opts=[o[1].strip() for o in opts_raw],
                           a='ABCD'.index(ans.group(1)), exp=e))
        elif tf:
            qs.append(dict(q=q, opts=['正确', '错误'],
                           a=0 if tf.group(1) in ('正确', '对') else 1, exp=e))
    return qs

def meta(txt):
    m = re.search(r'^#\s+(.+)$', txt, flags=re.M)
    return m.group(1).strip() if m else ''

stages_out = []
total_q = 0
for sd in STAGE_DEFS:
    chs, qpool = [], []
    if sd['quiz']:
        qpool = parse_quiz(read_md(sd['dir'], sd['quiz']))
    for name in sd['chapters']:
        txt = read_md(sd['dir'], name)
        title = meta(txt)
        body = re.sub(r'^#\s+.+\n', '', txt, count=1, flags=re.M)
        content = md_to_html(body)
        intro = ''
        m = re.search(r'<p>(.+?)</p>', content)
        if m: intro = re.sub(r'<[^>]+>', '', m.group(1))[:70]
        words = max(len(re.sub(r'\s', '', body)) // 300, 1)
        dur = f'约 {words * 10} 分钟'
        chs.append(dict(id=f"{sd['id']}-{name}", title=title, dur=dur, intro=intro, content=content, quiz=[]))
    # 题池均分到各章
    for idx, q in enumerate(qpool):
        chs[idx % len(chs)]['quiz'].append(q)
    total_q += len(qpool)
    stages_out.append(dict(id=sd['id'], num=sd['num'], title=sd['title'], en=sd['en'],
                           risky=sd['risky'], desc='', chapters=chs, exam=bool(qpool)))
    print(f"{sd['id']} {sd['title']}: {len(chs)} 章, 题库 {len(qpool)} 题")

exams = [{'stageId': s['id'], 'pass': 70, 'questions': []} for s in stages_out]
# 考核卷 = 阶段全部题目（从各章 quiz 回收）
for ex in exams:
    s = next(x for x in stages_out if x['id'] == ex['stageId'])
    qs = [q for c in s['chapters'] for q in c['quiz']]
    ex['questions'] = [dict(chId=c['id'], chTitle=c['title'], q=q)
                       for c in s['chapters'] for q in c['quiz']]

n_ch = sum(len(s['chapters']) for s in stages_out)
print(f"\n合计 {n_ch} 章, 考核卷 {[len(e['questions']) for e in exams]}")

out = "/* Chain Academy 内容数据 —— 由 crypto-learning 旧站全量迁移生成（convert.py）\n" \
      " * 编辑内容请直接改 crypto-learning 仓库后重新运行 python3 convert.py */\n" \
      "const STAGES = " + json.dumps(stages_out, ensure_ascii=False, indent=1) + ";\n\n" \
      "const EXAMS = " + json.dumps([e for e in exams if e['questions']], ensure_ascii=False, indent=1) + ";\n"
with open(OUT, 'w', encoding='utf-8') as f:
    f.write(out)
print(f"\n已生成 {OUT} ({os.path.getsize(OUT)//1024} KB)")
