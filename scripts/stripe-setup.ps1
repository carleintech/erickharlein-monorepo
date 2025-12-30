# 🚀 Quick Start - Stripe Local Testing

Write-Host "🎯 STRIPE LOCAL TESTING SETUP" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Check if Stripe CLI is installed
Write-Host "Checking Stripe CLI..." -ForegroundColor Yellow
$stripeInstalled = Get-Command stripe -ErrorAction SilentlyContinue

if (-not $stripeInstalled) {
    Write-Host "❌ Stripe CLI not found. Installing via Scoop...`n" -ForegroundColor Red
    scoop install stripe
    Write-Host "✅ Stripe CLI installed!`n" -ForegroundColor Green
} else {
    Write-Host "✅ Stripe CLI is already installed`n" -ForegroundColor Green
}

# Check Stripe version
Write-Host "Stripe CLI version:" -ForegroundColor Yellow
stripe --version
Write-Host ""

# Login to Stripe
Write-Host "🔐 STEP 1: Login to Stripe" -ForegroundColor Cyan
Write-Host "This will open your browser. Confirm the connection.`n" -ForegroundColor Yellow
Read-Host "Press Enter to continue"
stripe login
Write-Host ""

# Instructions for webhook listener
Write-Host "🎧 STEP 2: Start Webhook Listener" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan
Write-Host "I will now start the Stripe webhook listener." -ForegroundColor Yellow
Write-Host "YOU MUST:" -ForegroundColor Red
Write-Host "  1. Copy the webhook secret (whsec_...) that appears" -ForegroundColor Yellow
Write-Host "  2. Update it in .env.local file" -ForegroundColor Yellow
Write-Host "  3. Restart your dev server (pnpm dev)`n" -ForegroundColor Yellow

Write-Host "Press Ctrl+C to stop the listener when done testing`n" -ForegroundColor Gray
Read-Host "Press Enter to start the listener"

Write-Host "`n🚀 Starting Stripe webhook listener..." -ForegroundColor Green
Write-Host "Forwarding to: http://localhost:3000/api/stripe/webhook`n" -ForegroundColor Cyan

stripe listen --forward-to http://localhost:3000/api/stripe/webhook
