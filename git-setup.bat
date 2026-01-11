@echo off
rmdir /s /q .git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/AnandBinuArjun/RANSOMWATCH.git
git push -u origin main --force
pause
