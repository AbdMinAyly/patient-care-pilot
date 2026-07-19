@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Patient Care package uploader.
rem This script may run from a temporary extracted folder. It locates the real
rem Git repository, copies the package into it, then commits and pushes there.

for %%I in ("%~dp0.") do set "PACKAGE_DIR=%%~fI"
set "CONFIG_DIR=%LOCALAPPDATA%\PatientCare"
set "CONFIG_FILE=%CONFIG_DIR%\github-repository.txt"
set "REPO_CANDIDATE="
set "REPO_ROOT="

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed or is not available in PATH.
  goto :fail_pause
)

rem Repository selection priority:
rem 1. First command-line argument
rem 2. PATIENT_CARE_REPO environment variable
rem 3. Previously saved repository path
rem 4. The package folder itself
rem 5. Common project locations
if not "%~1"=="" set "REPO_CANDIDATE=%~1"
if not defined REPO_CANDIDATE if defined PATIENT_CARE_REPO set "REPO_CANDIDATE=%PATIENT_CARE_REPO%"
if not defined REPO_CANDIDATE if exist "%CONFIG_FILE%" set /p "REPO_CANDIDATE="<"%CONFIG_FILE%"
if not defined REPO_CANDIDATE set "REPO_CANDIDATE=%PACKAGE_DIR%"

call :resolve_repository "%REPO_CANDIDATE%"

if not defined REPO_ROOT call :try_repository "%USERPROFILE%\OneDrive\Documents\Test"
if not defined REPO_ROOT call :try_repository "%USERPROFILE%\Documents\Test"
if not defined REPO_ROOT call :try_repository "%USERPROFILE%\OneDrive\Documents\Patient Care"
if not defined REPO_ROOT call :try_repository "%USERPROFILE%\Documents\Patient Care"

:ask_repository
if not defined REPO_ROOT (
  echo.
  echo The package was extracted to:
  echo   %PACKAGE_DIR%
  echo.
  echo That temporary folder is not the Git repository.
  echo Enter the full path to the Patient Care repository.
  echo Example: C:\Users\YourName\OneDrive\Documents\Test
  set "REPO_CANDIDATE="
  set /p "REPO_CANDIDATE=Repository folder: "
  if not defined REPO_CANDIDATE goto :cancelled
  set "REPO_CANDIDATE=!REPO_CANDIDATE:"=!"
  call :resolve_repository "!REPO_CANDIDATE!"
  if not defined REPO_ROOT (
    echo.
    echo No Git repository was found at that location.
    goto :ask_repository
  )
)

if not exist "%CONFIG_DIR%" mkdir "%CONFIG_DIR%" >nul 2>nul
>"%CONFIG_FILE%" echo %REPO_ROOT%

for /f "delims=" %%R in ('git -C "%REPO_ROOT%" remote get-url origin 2^>nul') do set "ORIGIN_URL=%%R"
if not defined ORIGIN_URL (
  echo.
  echo The repository has no Git remote named origin.
  echo Add the GitHub remote, then run this uploader again.
  goto :fail_pause
)

for /f "delims=" %%B in ('git -C "%REPO_ROOT%" branch --show-current 2^>nul') do set "CURRENT_BRANCH=%%B"
if not defined CURRENT_BRANCH (
  echo.
  echo The repository is not on a named branch.
  echo Check out the branch you want to upload, then run this script again.
  goto :fail_pause
)

echo.
echo Package folder:
echo   %PACKAGE_DIR%
echo Repository:
echo   %REPO_ROOT%
echo Branch:
echo   %CURRENT_BRANCH%
echo Remote:
echo   %ORIGIN_URL%
echo.

if /I not "%PACKAGE_DIR%"=="%REPO_ROOT%" (
  echo Syncing package files into the repository...
  robocopy "%PACKAGE_DIR%" "%REPO_ROOT%" /E /COPY:DAT /DCOPY:DAT /R:2 /W:1 /XD ".git" /XF "*.zip" >nul
  set "ROBOCOPY_CODE=!ERRORLEVEL!"
  if !ROBOCOPY_CODE! GEQ 8 (
    echo Package sync failed. Robocopy exit code: !ROBOCOPY_CODE!
    goto :fail_pause
  )
) else (
  echo Package is already inside the repository. No copy step is needed.
)

echo.
echo Current package changes:
git -C "%REPO_ROOT%" status --short -- index.html styles.css app.js data README.md VERSION.txt PATIENT_CARE_CORE.md PATIENT_CARE_SHARED_LANGUAGE.md docs upload_to_github.cmd patient-care-v043-standalone-mobile.html

echo.
set "COMMIT_MESSAGE="
set /p "COMMIT_MESSAGE=Commit message [Patient Care v043]: "
if not defined COMMIT_MESSAGE set "COMMIT_MESSAGE=Patient Care v043"

git -C "%REPO_ROOT%" add -- index.html styles.css app.js data README.md VERSION.txt PATIENT_CARE_CORE.md PATIENT_CARE_SHARED_LANGUAGE.md docs upload_to_github.cmd patient-care-v043-standalone-mobile.html
if errorlevel 1 goto :git_fail

git -C "%REPO_ROOT%" diff --cached --quiet
if errorlevel 1 (
  git -C "%REPO_ROOT%" commit -m "%COMMIT_MESSAGE%"
  if errorlevel 1 goto :git_fail
) else (
  echo No new package changes need to be committed.
)

echo.
echo Pushing %CURRENT_BRANCH% to origin...
git -C "%REPO_ROOT%" push -u origin "%CURRENT_BRANCH%"
if errorlevel 1 goto :git_fail

echo.
echo Upload complete.
echo Repository path saved for future uploads:
echo   %CONFIG_FILE%
pause
exit /b 0

:resolve_repository
set "REPO_ROOT="
set "REPO_CANDIDATE=%~1"
if not defined REPO_CANDIDATE exit /b 0
if not exist "%REPO_CANDIDATE%" exit /b 0
for /f "delims=" %%G in ('git -C "%REPO_CANDIDATE%" rev-parse --show-toplevel 2^>nul') do set "REPO_ROOT=%%G"
exit /b 0

:try_repository
if not exist "%~1" exit /b 0
set "TRY_ROOT="
for /f "delims=" %%G in ('git -C "%~1" rev-parse --show-toplevel 2^>nul') do set "TRY_ROOT=%%G"
if defined TRY_ROOT set "REPO_ROOT=%TRY_ROOT%"
exit /b 0

:git_fail
echo.
echo Upload stopped because a Git command failed.
goto :fail_pause

:cancelled
echo.
echo Upload cancelled. No repository was selected.
pause
exit /b 1

:fail_pause
pause
exit /b 1
