@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "REPO_URL=https://github.com/AbdMinAyly/patient-care-pilot.git"
set "BRANCH=main"
set "SRC=%~dp0"
set "WORK=%TEMP%\patient-care-pilot-deploy"

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed or not available in PATH.
  pause
  exit /b 1
)

if exist "%WORK%\.git" (
  echo Updating existing deploy checkout...
  cd /d "%WORK%" || exit /b 1
  git fetch origin
  git checkout %BRANCH%
  git pull origin %BRANCH%
) else (
  echo Cloning repository...
  if exist "%WORK%" rmdir /s /q "%WORK%"
  git clone --branch %BRANCH% "%REPO_URL%" "%WORK%"
  if errorlevel 1 (
    echo Clone failed.
    pause
    exit /b 1
  )
)

cd /d "%WORK%" || exit /b 1

echo Copying v005 site files...
copy /Y "%SRC%index.html" "%WORK%\index.html" >nul
copy /Y "%SRC%styles.css" "%WORK%\styles.css" >nul
copy /Y "%SRC%app.js" "%WORK%\app.js" >nul
copy /Y "%SRC%README.md" "%WORK%\README.md" >nul
copy /Y "%SRC%HEALTH_GRAPH_SCHEMA.md" "%WORK%\HEALTH_GRAPH_SCHEMA.md" >nul
copy /Y "%SRC%open_local_preview.cmd" "%WORK%\open_local_preview.cmd" >nul
copy /Y "%SRC%upload_to_github.cmd" "%WORK%\upload_to_github.cmd" >nul

if exist "%WORK%\data" rmdir /s /q "%WORK%\data"
xcopy "%SRC%data" "%WORK%\data" /E /I /Y >nul

REM Remove old static app directories if they exist from previous experiments.
if exist "%WORK%\js" rmdir /s /q "%WORK%\js"
if exist "%WORK%\css" rmdir /s /q "%WORK%\css"
if exist "%WORK%\pages" rmdir /s /q "%WORK%\pages"
if exist "%WORK%\print" rmdir /s /q "%WORK%\print"

git add index.html styles.css app.js README.md HEALTH_GRAPH_SCHEMA.md open_local_preview.cmd upload_to_github.cmd data

git diff --cached --quiet
if not errorlevel 1 (
  echo No changes to commit.
  pause
  exit /b 0
)

git commit -m "Deploy Patient Care Pilot v005 SHINE HEAL simple safe"
if errorlevel 1 (
  echo Commit failed.
  pause
  exit /b 1
)

git push origin %BRANCH%
if errorlevel 1 (
  echo Push failed. Make sure your GitHub authentication is active for this repository.
  pause
  exit /b 1
)

echo.
echo Deploy complete.
echo GitHub Pages may take a minute to update.
pause
