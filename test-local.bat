@echo off
TITLE LSBSC - Serveur Local PWA
color 0B
echo ========================================================
echo   LILLE SUD BASKETBALL SPORTING CLUB (LSBSC)
echo   Lancement du serveur de test local (Python HTTP)
echo ========================================================
echo.

REM Cherche Python (commande "python" ou lanceur Windows "py")
set PYCMD=
python --version >nul 2>&1 && set PYCMD=python
if not defined PYCMD (
    py --version >nul 2>&1 && set PYCMD=py
)
if not defined PYCMD (
    echo [ERREUR] Python n'est pas installe ou n'est pas dans le PATH.
    echo Veuillez installer Python (https://www.python.org/) pour lancer le serveur local.
    pause
    exit /b
)

echo [INFO] Demarrage du serveur local sur le port 8000...
echo [INFO] Ouvrez votre navigateur sur : http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur.
echo --------------------------------------------------------

start http://localhost:8000
%PYCMD% -m http.server 8000
pause
