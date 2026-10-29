#!/usr/bin/env bash
# 临时公网隧道：手机用流量也能打开（电脑需保持开机）
set -e
cd "$(dirname "$0")"
PORT="${1:-8145}"
LOG="/tmp/chain-academy-tunnel.log"

# 若本地服务未启动，先在后台启动
if ! lsof -nP -iTCP:${PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  echo "启动本地服务 :${PORT} …"
  nohup python3 -m http.server "${PORT}" --bind 0.0.0.0 >/tmp/chain-academy-server.log 2>&1 &
  sleep 1
fi

echo "建立公网隧道（首次约 5–10 秒）…"
: > "$LOG"
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null \
    -o ServerAliveInterval=20 -o ExitOnForwardFailure=yes \
    -R 80:localhost:${PORT} nokey@localhost.run 2>&1 | tee "$LOG" &
SSH_PID=$!

for i in $(seq 1 30); do
  URL="$(grep -Eo 'https://[a-z0-9]+\.lhr\.life' "$LOG" | head -1 || true)"
  [ -n "$URL" ] && break
  sleep 1
done

if [ -z "$URL" ]; then
  echo "隧道建立失败，请检查网络后重试。日志：$LOG"
  exit 1
fi

echo "────────────────────────────────────────"
echo " 公网地址： $URL"
echo " 手机扫码或直接打开；电脑与隧道需要保持运行"
echo " 停止隧道： kill ${SSH_PID}"
echo "────────────────────────────────────────"

# 生成二维码（若安装了 qrcode）
PY="${PYTHON:-python3}"
if "$PY" -c "import qrcode" >/dev/null 2>&1; then
  mkdir -p ../mobile-access
  "$PY" - "$URL" <<'PYEOF'
import sys, qrcode
from PIL import Image, ImageDraw, ImageFont
url=sys.argv[1]
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=10, border=3)
qr.add_data(url); qr.make(fit=True)
img=qr.make_image(fill_color=(10,11,14), back_color=(247,244,236)).convert('RGB')
W=img.size[0]
canvas=Image.new('RGB',(W+80,img.size[1]+170),(247,244,236))
canvas.paste(img,(40,40))
d=ImageDraw.Draw(canvas)
try:
    f1=ImageFont.truetype('/System/Library/Fonts/Supplemental/Songti.ttc',32)
    f2=ImageFont.truetype('/System/Library/Fonts/Hiragino Sans GB.ttc',19)
    f3=ImageFont.truetype('/System/Library/Fonts/Menlo.ttc',14)
except Exception:
    f1=f2=f3=ImageFont.load_default()
d.text((40,img.size[1]+55),'手机扫这个（任意网络）',font=f1,fill=(23,22,18))
d.text((40,img.size[1]+98),'电脑与隧道保持运行；地址可能每次重启变化',font=f2,fill=(92,87,73))
d.text((40,img.size[1]+130),url,font=f3,fill=(138,106,47))
canvas.save('../mobile-access/tunnel-qr.png')
print('二维码已更新：mobile-access/tunnel-qr.png')
PYEOF
fi

wait $SSH_PID
