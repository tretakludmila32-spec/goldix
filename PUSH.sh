#!/bin/bash
set -e
echo "================================================"
echo "  Goldix - push to GitHub"
echo "================================================"
git init
git add .
git commit -m "Initial Goldix: React+Vite+Netlify Functions+WayForPay"
git branch -M main
git remote add origin https://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@github.com/tretakludmila32-spec/goldix.git
git push -u origin main
echo ""
echo "Готово! Напиши Claude: залил"
