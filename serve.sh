#!/usr/bin/env bash
# 本地预览：同时供手机（同一 Wi-Fi）访问
set -e
cd "$(dirname "$0")"
PORT="${1:-8145}"
IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo '')"

echo "────────────────────────────────────────"
echo " 电脑访问：  http://127.0.0.1:${PORT}/"
if [ -n "$IP" ]; then
  echo " 手机访问：  http://${IP}:${PORT}/   （手机与电脑需连同一个 Wi-Fi）"
else
  echo " 未检测到局域网 IP，请检查 Wi-Fi 连接"
fi
echo " 停止服务：  Ctrl + C"
echo "────────────────────────────────────────"

exec python3 -m http.server "${PORT}" --bind 0.0.0.0
