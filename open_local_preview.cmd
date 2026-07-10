@echo off
setlocal
set "HERE=%~dp0"
if not exist "%HERE%index.html" (
  echo index.html was not found next to this script.
  pause
  exit /b 1
)
start "" "%HERE%index.html"
