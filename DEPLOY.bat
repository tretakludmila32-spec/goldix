@echo off
echo ========================================
echo   Goldix — Deploy to Netlify
echo ========================================
echo.
echo Ставлю Netlify CLI (один раз)...
call npm install -g netlify-cli
echo.
echo Ставлю залежності проекту...
call npm install
echo.
echo Логінюсь у Netlify (відкриється браузер)...
call netlify login
echo.
echo Будую проект...
call npm run build
echo.
echo Деплою на goldix-site...
call netlify deploy --prod --dir=dist --functions=netlify/functions --site=a7602489-19bc-47d5-a7a9-c395fd83084c
echo.
echo ========================================
echo   Готово! Сайт на https://goldix-site.netlify.app
echo ========================================
pause
