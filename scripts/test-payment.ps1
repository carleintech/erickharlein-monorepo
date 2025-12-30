# 🧪 Quick Test Script - Stripe Payment Flow

Write-Host "`n🧪 STRIPE PAYMENT TEST HELPER" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "✅ Prerequisites Check:" -ForegroundColor Yellow
Write-Host "  1. Stripe CLI running in another terminal? (stripe listen)" -ForegroundColor Gray
Write-Host "  2. Dev server running? (pnpm dev)" -ForegroundColor Gray
Write-Host "  3. Webhook secret updated in .env.local?" -ForegroundColor Gray
Write-Host ""

$continue = Read-Host "All prerequisites met? (y/n)"

if ($continue -ne "y") {
    Write-Host "`n❌ Please complete prerequisites first.`n" -ForegroundColor Red
    Write-Host "📖 See STRIPE-LOCAL-TESTING.md for setup instructions`n" -ForegroundColor Yellow
    exit
}

Write-Host "`n🎯 Test Scenarios Available:" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan
Write-Host "1. ✅ Successful Payment" -ForegroundColor Green
Write-Host "   Card: 4242 4242 4242 4242`n" -ForegroundColor Gray

Write-Host "2. 🔐 Payment with 3D Secure" -ForegroundColor Yellow
Write-Host "   Card: 4000 0027 6000 3184`n" -ForegroundColor Gray

Write-Host "3. ❌ Card Declined" -ForegroundColor Red
Write-Host "   Card: 4000 0000 0000 0002`n" -ForegroundColor Gray

Write-Host "4. 💸 Insufficient Funds" -ForegroundColor Red
Write-Host "   Card: 4000 0000 0000 9995`n" -ForegroundColor Gray

Write-Host "`nFor all cards:" -ForegroundColor Yellow
Write-Host "  • Expiry: Any future date (e.g., 12/34)" -ForegroundColor Gray
Write-Host "  • CVC: Any 3 digits (e.g., 123)" -ForegroundColor Gray
Write-Host "  • ZIP: Any 5 digits (e.g., 12345)`n" -ForegroundColor Gray

Write-Host "📍 Opening booking page in browser..." -ForegroundColor Cyan
Start-Process "http://localhost:3000/booking"

Write-Host "`n🔍 What to Watch:" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Yellow
Write-Host "Stripe CLI Terminal:" -ForegroundColor Cyan
Write-Host "  --> checkout.session.completed [evt_xxx]" -ForegroundColor Gray
Write-Host "  <-- [200] POST http://localhost:3000/api/stripe/webhook`n" -ForegroundColor Gray

Write-Host "Dev Server Terminal:" -ForegroundColor Cyan
Write-Host "  ✅ Webhook received: checkout.session.completed" -ForegroundColor Gray
Write-Host "  📧 Booking confirmation email sent`n" -ForegroundColor Gray

Write-Host "Your Inbox:" -ForegroundColor Cyan
Write-Host "  • Customer booking confirmation (to their email)" -ForegroundColor Gray
Write-Host "  • Admin notification (to erickharleinp@gmail.com)`n" -ForegroundColor Gray

Write-Host "💡 Tip: Check Resend dashboard for email logs:" -ForegroundColor Yellow
Write-Host "   https://resend.com/emails`n" -ForegroundColor Cyan

Write-Host "🎉 Ready to test! Complete the booking form in your browser.`n" -ForegroundColor Green
