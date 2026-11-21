@echo off
cd /d "%~dp0"
echo Lancement du serveur local LSBSC sur http://localhost:8080 ...
start "" "http://localhost:8080"
where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8080
) else (
  where npx >nul 2>nul
  if %errorlevel%==0 (
    npx --yes serve -p 8080 .
  ) else (
    echo Installez Python ou Node.js pour lancer un serveur HTTP local.
    pause
  )
)
