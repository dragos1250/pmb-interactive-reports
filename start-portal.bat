@echo off
title Portal Sesizări PMB - Pornire

echo =====================================
echo 	Verific pachetele necesare...
echo =====================================

:: ====== Pornire SERVER ======
echo	Configurare server...
cd server

    echo Instalare dependente server...
    call npm install

echo Pornire server...
start cmd /k "node index.js"
cd ..

:: ====== Pornire CLIENT (React) ======
echo =====================================
echo  Configurare frontend (React)...
echo =====================================
cd client

if not exist node_modules (
    echo  Instalare dependente frontend...
    call npm install
)

echo  Porneste frontend-ul React...
start cmd /k "npm run dev"
cd ..

:: ====== Deschidere aplicație în browser ======
start http://localhost:5173

exit
