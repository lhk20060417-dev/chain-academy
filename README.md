# Chain Academy · 区块链与市场结构学堂

纯静态的个人学习站：**73 节系统课程 + 98 个技术概念 + 50 类影响力事件 + 交易纪律工作台 + DeepSeek 自检 + 6 个数学工具**。

> 全部内容仅用于区块链与市场结构的**理论学习**，不构成投资建议；不提供任何标的、点位与方向判断。
> 虚拟货币相关业务活动在中国境内属于非法金融活动，不受法律保护。

## 页面

| 页面 | 作用 |
|---|---|
| `index.html` | 开场引导（首次进入）+ 控制台：实时盘面、实时快讯、情绪仪表、链上快照、纪律打卡、影响雷达、学习进度（桌面端锁定一屏） |
| `course.html` | 系统课程 / 技术知识库 / 策略库；按基础→入门→进阶→高级分级，**无顺序解锁** |
| `chapter.html` | 章节阅读器：目录、正文、自测、阶段考核 |
| `news.html` | 影响力事件库（S/A/B/C 分级 + 方向 + 传导机制）、信息源、每周节奏、我的消息簿 |
| `discipline.html` | 交易纪律：风险参数、书面规则、每日流程、违规记录、连续打卡、Markdown 导出 |
| `selfcheck.html` | 25 题五维自检 + 本地评分雷达 + DeepSeek 个性化报告（Key 只存本机） |
| `tools.html` | 交易数学实验室：仓位、期望值/凯利、蒙特卡洛破产、回撤、永续、波动率目标 |
| `progress.html` / `errors.html` | 学习进度与错题复盘 |
| `lab.html` | 隔离的复盘工作台（历史记录与心理标签） |
| `master.html` | 第七学段「顶级交易思维」总览 |
| `roadmap.html` / `library.html` | 旧地址，自动跳转到 `course.html` |

## 本地运行

```bash
python3 -m http.server 8145
# http://127.0.0.1:8145/
```

无构建、无后端、无依赖。学习/纪律/消息簿数据保存在 `localStorage`（前缀 `ca_`）。

## 目录

```
css/vars.css        设计 Token（Obsidian / Paper 双主题）
css/system.css      组件系统
css/pages.css       页面级样式（含 v5 控制台、消息、纪律、自检）
js/content.js       第 1–6 学段课程
js/content-master.js 第 7 学段课程
js/data-knowledge.js 技术知识库（98 条，含分级/分类/失效条件）
js/data-news.js     影响力事件库（50 类）、信息源、每周节奏
js/data-selfcheck.js 自检题库、本地评分、DeepSeek 提示词
js/discipline.js    纪律数据层（localStorage）
js/ai.js            DeepSeek 客户端
js/live.js          实时数据层：盘面 / 情绪 / 链上 / RSS 消息（多代理竞速 + 缓存）
js/storage.js       进度与解锁逻辑（v5 已取消解锁限制）
js/ui.js            导航/页脚、主题、⌘K 搜索、Markdown 渲染
js/chart.js         合成行情图
```

## 部署

GitHub Pages 直接以仓库为源即可。`sitemap.xml` / `robots.txt` 中的域名需替换为你的实际地址。

改版说明见 [DESIGN-REVIEW.md](DESIGN-REVIEW.md)。

## 实时数据

- 盘面：`data-api.binance.vision`（BTC/ETH/SOL，15 秒刷新）
- 情绪：`api.alternative.me`（恐惧贪婪指数与 14 天历史）
- 链上：`api.blockchair.com` / `mempool.space`
- 消息：Cointelegraph / CoinDesk RSS，经公共 CORS 代理竞速抓取；代理不稳定时会退回上次缓存或影响力事件库

## 隐私与边界

- 无账号、无统计脚本、无上传。
- DeepSeek Key 仅存于浏览器，请求直接发往 `api.deepseek.com`。
- 不提供实时行情报价；链上快照与情绪指数来自公开接口，仅作信息展示。
