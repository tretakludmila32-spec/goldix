@echo off
echo ================================================
echo   Goldix - push to GitHub + deploy hint
echo ================================================
echo.
echo Этот скрипт зальет код в репозиторий goldix.
echo Если git не установлен - поставь с https://git-scm.com/download/win
echo.
pause

git init
git add .
git commit -m "Initial Goldix: React+Vite+Netlify Functions+WayForPay"
git branch -M main
git remote add origin https://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@github.com/tretakludmila32-spec/goldix.git
git push -u origin main

echo.
echo ================================================
echo   Готово! Иди к Claude и напиши "залил"
echo   Дальше Claude подключит Netlify и запустит
echo   деплой автоматически.
echo ================================================
pause
