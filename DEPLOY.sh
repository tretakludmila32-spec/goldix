#!/bin/bash
set -e
echo "========================================"
echo "  Goldix — Deploy to Netlify"
echo "========================================"
echo ""
echo "Ставлю Netlify CLI..."
npm install -g netlify-cli
echo ""
echo "Ставлю залежності..."
npm install
echo ""
echo "Логін у Netlify..."
netlify login
echo ""
echo "Білд..."
npm run build
echo ""
echo "Деплой на goldix-site..."
netlify deploy --prod --dir=dist --functions=netlify/functions --site=a7602489-19bc-47d5-a7a9-c395fd83084c
echo ""
echo "========================================"
echo "  Готово! https://goldix-site.netlify.app"
echo "========================================"
