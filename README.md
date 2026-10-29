# Chain Academy · 区块链与市场结构通识学院

一个纯静态的自学站点：七大学段、73 节课、自测与阶段考核、六个交易数学工具，以及一个用于历史复盘的工作台。

> 全部内容仅用于区块链技术与市场结构的**理论学习**，不构成投资建议；不提供任何标的、点位与方向判断。
> 虚拟货币相关业务活动在中国境内属于非法金融活动，不受法律保护。

## 本地运行

```bash
python3 -m http.server 8145
# 打开 http://127.0.0.1:8145/
```

无需构建、无后端、无依赖。学习数据保存在浏览器 `localStorage`（键前缀 `ca_`），可在「进度」页导出 JSON。

## 目录

```
index.html        首页（合成行情图、课程索引、方法论、实验室预览）
roadmap.html      课程图谱（七学段、线性解锁、阶段考核入口）
library.html      章节库（筛选 + 搜索）
chapter.html      章节阅读器（目录、正文、自测/考核）
master.html       第七学段「顶级交易思维」总览
tools.html        交易数学实验室（仓位/期望值/破产模拟/回撤/永续/波动率目标）
progress.html     学习进度（完成率、热力图、最近记录、导出与清空）
errors.html       错题复盘（重做并标记已掌握）
feedback.html     本地提问清单
lab.html          复盘工作台（隔离模块，历史记录与心理标签）
404.html          自定义 404

css/vars.css      设计 Token（双主题：Obsidian / Paper）
css/system.css    组件系统
css/pages.css     页面级样式

js/content.js     第 1–6 学段内容
js/content-master.js  第 7 学段内容（由 content.js 之后加载，追加 STAGES/EXAMS）
js/storage.js     localStorage、解锁逻辑、i18n 兼容层
js/ui.js          导航/页脚、主题、⌘K 搜索、阅读进度、Toast
js/chart.js       合成行情图与迷你走势线
```

## 部署

GitHub Pages：把仓库分支设为 Pages 源即可（纯静态，无需 Actions）。`sitemap.xml` 与 `robots.txt` 中的域名需替换为你的实际地址。

## 改版说明

v4.0 的诊断、设计系统与内容升级方案见 [DESIGN-REVIEW.md](DESIGN-REVIEW.md)。
