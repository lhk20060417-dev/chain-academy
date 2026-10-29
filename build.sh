#!/usr/bin/env bash
# 将分散的 CSS / JS 合并成单文件，减少移动网络下的请求数。
# 修改源码后运行：bash build.sh
set -e
cd "$(dirname "$0")"

cat css/vars.css css/system.css css/pages.css > css/app.css

cat \
  js/content.js \
  js/content-master.js \
  js/data-knowledge.js \
  js/data-news.js \
  js/data-selfcheck.js \
  js/discipline.js \
  js/storage.js \
  js/live.js \
  js/ai.js \
  js/chart.js \
  js/ui.js \
  > js/app.js

echo "css/app.css  $(wc -c < css/app.css) bytes"
echo "js/app.js    $(wc -c < js/app.js) bytes"
