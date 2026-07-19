@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"

if not exist VERSION.txt (
  echo VERSION.txt was not found.
  exit /b 1
)
set /p PC_VERSION=<VERSION.txt
if "%PC_VERSION%"=="" set "PC_VERSION=v045"
set "DEFAULT_MESSAGE=Patient Care %PC_VERSION%"

set "COMMIT_MESSAGE=%~1"
if "%COMMIT_MESSAGE%"=="" set "COMMIT_MESSAGE=%DEFAULT_MESSAGE%"

echo Staging Patient Care %PC_VERSION%...
git add -A -- index.html styles.css app.js data/content.js data/schema.json README.md VERSION.txt upload_to_github.cmd open_local_preview.cmd PATIENT_CARE_CORE.md PATIENT_CARE_SHARED_LANGUAGE.md docs
if errorlevel 1 exit /b 1

set "STANDALONE_FOUND="
for %%F in (patient-care-v*-standalone-mobile.html) do (
  if exist "%%F" (
    git add -- "%%F"
    set "STANDALONE_FOUND=1"
  )
)
if not defined STANDALONE_FOUND echo No standalone HTML package found; continuing without one.

git status --short
git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
  echo Nothing committed or commit failed.
  exit /b 1
)
git push
endlocal
