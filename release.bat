if not exist "docs\dist" mkdir "docs\dist"
xcopy dist "docs\dist" /E /Y /S 
copy src\*.html docs
npm run release-win