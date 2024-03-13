@echo off
setlocal enabledelayedexpansion

set "targetFolder=%~dp0"
set "characterToRemove=_"

for %%F in ("%targetFolder%\*") do (
    set "fileName=%%~nF"
    set "newFileName=!fileName:%characterToRemove%=!"
    if not "!fileName!"=="!newFileName!" (
        ren "%%F" "!newFileName!%%~xF"
    )
)

echo 删除完成
pause