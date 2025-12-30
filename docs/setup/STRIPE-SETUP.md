# 🚀 QUICK START GUIDE - Stripe Integration

## ✅ What I Just Installed

I've implemented the complete Stripe payment system for your booking wizard:

### New Files Created:
1. ✅ `apps/web/app/api/bookings/checkout/route.ts` - Creates Stripe checkout sessions
2. ✅ `apps/web/app/api/stripe/webhook/route.ts` - Handles payment confirmations
3. ✅ `apps/web/app/booking/success/page.tsx` - Beautiful success page
4. ✅ `apps/web/app/booking/cancelled/page.tsx` - Cancellation page
5. ✅ `apps/web/.env.local` - Environment variables (with your test keys)
6. ✅ Installed Stripe SDK (`stripe` package)

---

## 🧪 TEST YOUR INTEGRATION NOW

### Step 1: Start Development Server
```bash
cd apps/web
pnpm dev
```

### Step 2: Test the Booking Flow
1. Go to: http://localhost:3000/booking
2. Fill out the booking wizard
3. Click "Pay Deposit & Reserve Slot"
4. You'll be redirected to Stripe Checkout

### Step 3: Test Payment with Stripe Test Cards
Use these test card numbers:
```
✅ SUCCESS: 4242 4242 4242 4242
❌ DECLINE: 4000 0000 0000 0002
⚠️  3D SECURE: 4000 0025 0000 3155

Expiry: Any future date (e.g., 12/25)
CVC: Any 3 digits (e.g., 123)
ZIP: Any 5 digits (e.g., 12345)
```

### Step 4: See the Magic!
- After successful payment → Redirects to `/booking/success`
- After cancellation → Redirects to `/booking/cancelled`

---

## 🔐 WEBHOOK SETUP (REQUIRED FOR PRODUCTION)

Your webhook endpoint is ready, but you need to configure it in Stripe:

### Option A: Test Locally with Stripe CLI (Recommended for testing)
1. **Install Stripe CLI**:
   ```bash
   # Windows
   scoop install stripe

   # Or download from: https://stripe.com/docs/stripe-cli
   ```

2. **Login to Stripe**:
   ```bash
   stripe login
   ```

3. **Forward webhooks to localhost**:
   ```bash
   stripe listen --forward-to http://localhost:3000/api/stripe/webhook
   ```

4. **Copy the webhook secret** (starts with `whsec_`):
   ```bash
   # Update your .env.local with the secret:
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

5. **Test a payment** - the webhook will automatically fire!

### Option B: Production Webhook (After deploying to Vercel)
1. Go to: https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://erickharlein.com/api/stripe/webhook`
4. Events to listen for:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.payment_failed`
5. Copy the webhook signing secret (`whsec_...`)
6. Add to Vercel environment variables:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

---

## 📧 EMAIL NOTIFICATIONS (OPTIONAL BUT RECOMMENDED)

Your payment confirmation emails are ready to send! Just add Resend API key:

### Setup Resend (5 minutes):
1. **Create account**: https://resend.com/signup
2. **Get API key**: Dashboard → API Keys → Create
3. **Add to `.env.local`**:
   ```bash
   RESEND_API_KEY=re_YOUR_KEY_HERE
   FROM_EMAIL="TechKlein <hello@erickharlein.com>"
   ```

**Email features included**:
- ✅ Payment confirmation to customer
- ✅ Professional HTML email template
- ✅ Project details and next steps
- ✅ Automatic sending after successful payment

**Cost**: Free (100 emails/day)

---

## 🎯 WHAT WORKS RIGHT NOW

### ✅ Fully Functional:
- Booking wizard (9 steps)
- Real-time pricing calculation
- Stripe checkout session creation
- Payment processing
- Success/cancelled pages
- Webhook ready to receive events

### ⚠️ Pending (adds when you add API keys):
- Webhook signature verification (needs `STRIPE_WEBHOOK_SECRET`)
- Email notifications (needs `RESEND_API_KEY`)

---

## 🧪 TESTING CHECKLIST

### Local Testing:
- [ ] Start dev server (`pnpm dev`)
- [ ] Complete booking wizard
- [ ] Test payment with `4242 4242 4242 4242`
- [ ] Verify redirect to success page
- [ ] Test cancellation flow
- [ ] Check browser console for errors

### With Stripe CLI:
- [ ] Install and login to Stripe CLI
- [ ] Forward webhooks to localhost
- [ ] Add webhook secret to `.env.local`
- [ ] Complete test payment
- [ ] Verify webhook receives `checkout.session.completed` event
- [ ] Check console logs for confirmation

### With Resend (Optional):
- [ ] Add Resend API key
- [ ] Complete test payment
- [ ] Check email inbox for confirmation
- [ ] Verify email formatting

---

## 🚀 DEPLOYMENT TO VERCEL

When you're ready to deploy:

### 1. Add Environment Variables to Vercel
Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

Add these variables:
```bash
# STRIPE (Required)
STRIPE_SECRET_KEY=sk_live_... # ⚠️ SWITCH TO LIVE KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... # ⚠️ SWITCH TO LIVE KEY
STRIPE_WEBHOOK_SECRET=whsec_... # From production webhook

# RESEND (Optional)
RESEND_API_KEY=re_...
FROM_EMAIL="TechKlein <hello@erickharlein.com>"

# SITE
NEXT_PUBLIC_SITE_URL=https://erickharlein.com
```

### 2. Create Production Webhook
1. Go to: https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://erickharlein.com/api/stripe/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.payment_failed`
4. Copy webhook secret to Vercel

### 3. Deploy
```bash
git add .
git commit -m "Add Stripe payment integration"
git push origin main
```

Vercel will auto-deploy! 🎉

---

## 💡 QUICK TROUBLESHOOTING

### "Webhook signature verification failed"
- **Cause**: Wrong `STRIPE_WEBHOOK_SECRET`
- **Fix**: Get correct secret from Stripe CLI or Dashboard

### "Failed to create checkout session"
- **Cause**: Wrong `STRIPE_SECRET_KEY` or missing
- **Fix**: Check `.env.local` has correct key

### Email not sending
- **Cause**: Missing `RESEND_API_KEY`
- **Fix**: Add Resend API key to `.env.local`

### Success page showing but no email
- **Cause**: Webhook not configured
- **Fix**: Run Stripe CLI or set up production webhook

---

## 📊 YOUR PAYMENT FLOW

```
User completes booking wizard
        ↓
Clicks "Pay Deposit"
        ↓
Redirects to Stripe Checkout (hosted)
        ↓
Enters card details
        ↓
Stripe processes payment
        ↓
        ├─ SUCCESS → Redirects to /booking/success
        │            Webhook fires → Sends email
        │
        └─ CANCEL  → Redirects to /booking/cancelled
```

---

## 🎉 YOU'RE READY TO TEST!

Run this now:
```bash
cd apps/web
pnpm dev
```

Then visit: http://localhost:3000/booking

Use test card: **4242 4242 4242 4242**

---

## 📞 NEXT STEPS

1. ✅ Test payment flow locally (5 min)
2. ⏳ Set up Stripe CLI for webhooks (10 min)
3. ⏳ Add Resend for emails (5 min)
4. ⏳ Deploy to Vercel (15 min)

**Total time to production**: ~35 minutes!

---

## 📝 IMPORTANT SECURITY NOTES

### ⚠️ NEVER commit these to Git:
- ✅ `.env.local` is in `.gitignore` ✓
- ✅ Stripe secret keys are safe ✓
- ✅ Webhook secrets are safe ✓

### 🔒 When switching to production:
- Replace `sk_test_...` with `sk_live_...`
- Replace `pk_test_...` with `pk_live_...`
- Create new production webhook secret
- Test with real card before announcing

---

## ✅ STATUS UPDATE

**What's Complete**:
- ✅ Stripe SDK installed
- ✅ Checkout endpoint created
- ✅ Webhook handler created
- ✅ Success/cancelled pages
- ✅ Email template ready
- ✅ Environment variables configured

**What's Pending**:
- ⏳ Webhook secret (get from Stripe CLI)
- ⏳ Resend API key (optional)
- ⏳ Production deployment

**You can start testing RIGHT NOW!** 🚀
