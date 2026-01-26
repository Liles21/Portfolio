@echo off
REM Quick Start Script for Email Integration Setup

echo.
echo ====================================
echo Email Integration Setup
echo ====================================
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: npm install failed
        pause
        exit /b 1
    )
    echo Dependencies installed successfully!
    echo.
)

REM Check if .env.local exists
if not exist .env.local (
    echo.
    echo IMPORTANT: Create .env.local file
    echo ===================================
    echo Copy .env.example to .env.local and fill in your Gmail credentials:
    echo   - EMAIL_USER: your Gmail address
    echo   - EMAIL_PASSWORD: your app password (from myaccount.google.com/apppasswords)
    echo   - PERSONAL_EMAIL: where to receive contact form submissions
    echo.
    echo Once configured, run: npm run dev:all
    echo.
    pause
    exit /b 1
)

REM Check if .env.local has been configured
findstr /C:"your-gmail@gmail.com" .env.local > nul
if %errorlevel% equ 0 (
    echo.
    echo ERROR: .env.local not configured!
    echo Please update .env.local with your Gmail credentials.
    echo.
    pause
    exit /b 1
)

REM Start the application
echo.
echo Starting frontend and backend servers...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
echo Press Ctrl+C to stop.
echo.

call npm run dev:all
pause
