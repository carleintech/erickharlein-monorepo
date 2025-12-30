# 🎯 Stripe CLI Local Testing Guide

## Current Status
✅ Stripe Test Keys Configured  
✅ Webhook Handler Built (`/api/stripe/webhook`)  
⏳ Local Webhook Listener — **Let's Set This Up Now**

---

## 🚀 PHASE 4: Install & Configure Stripe CLI

### Step 1: Install Stripe CLI

Open PowerShell in your project directory:

```powershell
# Install Stripe CLI via Scoop
scoop install stripe

# Verify installation
stripe --version
```

### Step 2: Login to Stripe

```powershell
stripe login
```

This will:
1. Open your browser
2. Ask you to confirm the connection
3. Grant CLI access to your Stripe account

### Step 3: Start Local Webhook Listener

```powershell
# Start the listener (this will give you a LOCAL webhook secret)
stripe listen --forward-to http://localhost:3000/api/stripe/webhook
```

You'll see output like:
```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxx (^C to quit)
```

### Step 4: Update .env.local with LOCAL Secret

**IMPORTANT:** The secret from `stripe listen` is ONLY for local development.

Copy the `whsec_...` value from the terminal output and update your `.env.local`:

```bash
# For LOCAL DEVELOPMENT (from stripe listen)
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

**Note:** Keep this terminal window open while developing. When you stop the listener, webhooks won't work locally.

### Step 5: Restart Your Dev Server

In a NEW terminal window:

```powershell
pnpm dev
```

---

## 💳 PHASE 5: Test the Full Payment Flow

### Test Scenario 1: Successful Payment

1. **Navigate to booking page:**
   ```
   http://localhost:3000/booking
   ```

2. **Fill out the form:**
   - Service: Any option
   - Timeline: Any option
   - Your details: Name, email, etc.

3. **Use Stripe test card:**
   ```
   Card Number: 4242 4242 4242 4242
   Expiry: Any future date (e.g., 12/34)
   CVC: Any 3 digits (e.g., 123)
   ZIP: Any 5 digits (e.g., 12345)
   ```

4. **Complete checkout**

### What Should Happen:

**In Stripe CLI Terminal:**
```
2025-12-29 10:30:15   --> checkout.session.completed [evt_xxx]
2025-12-29 10:30:15  <--  [200] POST http://localhost:3000/api/stripe/webhook [evt_xxx]
```

**In Your Dev Server Terminal:**
```
✅ Webhook received: checkout.session.completed
📧 Booking confirmation email sent
🎉 Payment processed successfully
```

**In Stripe Dashboard:**
- Go to: https://dashboard.stripe.com/test/payments
- You should see your test payment

---

## 🧪 Additional Test Cards

### Test Different Scenarios:

```bash
# Successful payment
4242 4242 4242 4242

# Payment requires authentication (3D Secure)
4000 0027 6000 3184

# Card declined
4000 0000 0000 0002

# Insufficient funds
4000 0000 0000 9995

# Card expired
4000 0000 0000 0069
```

---

## 🔍 Debugging Checklist

If webhooks aren't working:

### ✅ Check 1: Stripe CLI is Running
```powershell
# You should see this in the stripe listen terminal:
> Ready! Your webhook signing secret is whsec_...
```

### ✅ Check 2: Correct Webhook Secret
```bash
# In .env.local - should match the output from stripe listen
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

### ✅ Check 3: Dev Server Restarted
```powershell
# Kill and restart
pnpm dev
```

### ✅ Check 4: Webhook Endpoint is Correct
The listener should forward to: `http://localhost:3000/api/stripe/webhook`

### ✅ Check 5: Check Logs
- **Stripe CLI logs:** See events in real-time
- **Dev server logs:** Check for errors in your terminal
- **Browser console:** Check for frontend errors

---

## 🏗️ Production Deployment

### When You Deploy to Production:

1. **Create Production Webhook Endpoint in Stripe Dashboard:**
   - Go to: https://dashboard.stripe.com/webhooks
   - Click "Add endpoint"
   - URL: `https://erickharlein.com/api/stripe/webhook`
   - Events to send:
     - `checkout.session.completed`
     - `checkout.session.expired`
     - `payment_intent.payment_failed`
   - Copy the **Signing secret** (different from local!)

2. **Add to Vercel Environment Variables:**
   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_production_secret_here
   ```

3. **Switch to Production Keys:**
   ```bash
   # In Vercel, use LIVE keys (not test keys)
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```

---

## 📊 Webhook Events Explained

### `checkout.session.completed`
- **Triggers when:** Payment succeeds
- **Your code should:**
  - Send confirmation email to customer
  - Send notification email to you
  - Store booking in database (future: Supabase)
  - Update booking status

### `checkout.session.expired`
- **Triggers when:** Checkout link expires (30 min default)
- **Your code should:**
  - Clean up any pending records
  - Log abandoned checkout

### `payment_intent.payment_failed`
- **Triggers when:** Card declined or payment fails
- **Your code should:**
  - Log the failure
  - Notify customer (optional)

---

## 🎉 Success Indicators

You'll know everything is working when:

✅ Stripe CLI shows `[200] POST` responses (no errors)  
✅ Dev server logs show "Webhook received"  
✅ Customer receives booking confirmation email  
✅ You receive admin notification email  
✅ Stripe dashboard shows successful payment  
✅ No errors in browser console  

---

## 💡 Pro Tips

### Tip 1: Keep Stripe CLI Running
While developing, keep the `stripe listen` terminal open. If you close it, webhooks stop working.

### Tip 2: Test Webhook Replay
In Stripe CLI, you can replay past events:
```powershell
stripe events resend evt_xxxxxxxxxxxxx
```

### Tip 3: Simulate Webhooks Manually
```powershell
stripe trigger checkout.session.completed
```

### Tip 4: View All Events
```powershell
stripe events list
```

---

## 🚨 Common Issues

### Issue: "Webhook signature verification failed"
**Solution:** Your webhook secret doesn't match. Run `stripe listen` again and copy the new secret to `.env.local`.

### Issue: "No webhook signing secret provided"
**Solution:** Make sure `STRIPE_WEBHOOK_SECRET` is set in `.env.local` and you restarted dev server.

### Issue: Stripe CLI shows 404 error
**Solution:** Check that your webhook endpoint exists at `/api/stripe/webhook/route.ts`.

### Issue: Payment succeeds but no webhook fires
**Solution:** Ensure Stripe CLI is running with `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`.

---

## 📚 Resources

- [Stripe CLI Documentation](https://stripe.com/docs/stripe-cli)
- [Testing Webhooks Locally](https://stripe.com/docs/webhooks/test)
- [Stripe Test Cards](https://stripe.com/docs/testing)
- [Webhook Best Practices](https://stripe.com/docs/webhooks/best-practices)

---

## ✅ Deployment Checklist

### Local Development
- [x] Stripe test keys configured
- [x] Stripe CLI installed
- [ ] Run `stripe login`
- [ ] Run `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`
- [ ] Copy webhook secret to `.env.local`
- [ ] Restart dev server
- [ ] Test payment with 4242 4242 4242 4242

### Production (Vercel)
- [ ] Create production webhook endpoint in Stripe dashboard
- [ ] Add production webhook secret to Vercel
- [ ] Switch to LIVE Stripe keys (sk_live_... and pk_live_...)
- [ ] Test on production domain
- [ ] Monitor webhook deliveries in Stripe dashboard

---

**Ready to test? Open two terminal windows:**

**Terminal 1:**
```powershell
stripe listen --forward-to http://localhost:3000/api/stripe/webhook
```

**Terminal 2:**
```powershell
pnpm dev
```

Then visit: `http://localhost:3000/booking` and complete a test payment! 🚀
