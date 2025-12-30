# Resend Email Setup Guide

## What Was Installed

✅ **Resend SDK** (`resend@6.6.0`)  
✅ **React Email Render** (`@react-email/render@2.0.0`)  
✅ **Email Template**: `apps/web/emails/booking-confirmation.tsx`  
✅ **Webhook Integration**: Updated `apps/web/app/api/stripe/webhook/route.ts`

## Quick Start (5 Minutes)

### 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (free tier: 100 emails/day)
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Give it a name like "TechKlein Production"
5. Copy the API key (starts with `re_...`)

### 2. Add to Environment Variables

Open `apps/web/.env.local` and update:

```bash
# Resend Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL="TechKlein <hello@erickharlein.com>"
```

### 3. (Optional) Verify Your Domain

**Why?** Send emails from your own domain instead of `onboarding@resend.dev`

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain** and enter `erickharlein.com`
3. Add the DNS records they provide to your domain registrar:
   - **SPF** (TXT record)
   - **DKIM** (TXT record)
   - **DMARC** (TXT record) - optional but recommended
4. Wait 24-48 hours for DNS propagation
5. Resend will verify automatically

**Without domain verification**, emails will be sent from:  
`TechKlein <onboarding@resend.dev>`

**With domain verification**, emails will be sent from:  
`TechKlein <hello@erickharlein.com>` ✨

## Testing Email Sending

### Local Test (Without Payment)

You can test the email template in isolation:

```bash
cd apps/web
pnpm dev
```

Then navigate to a test route (you can create one):

```typescript
// apps/web/app/api/test-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { BookingConfirmationEmail } from "@/emails/booking-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function GET() {
  try {
    const emailHtml = await render(
      BookingConfirmationEmail({
        customerName: "John Doe",
        projectType: "E-Commerce Platform",
        totalAmount: 15000,
        depositAmount: 5000,
        monthlyAmount: 2500,
        timelineWeeks: 12,
        customerEmail: "john@example.com",
        customerPhone: "+1 (555) 123-4567",
      })
    );

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "TechKlein <hello@erickharlein.com>",
      to: ["your-email@example.com"], // Change to your email
      subject: "🎉 Test Email - Booking Confirmation",
      html: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
```

Then visit: `http://localhost:3000/api/test-email`

### Full Integration Test (With Stripe Payment)

1. Start dev server: `pnpm dev`
2. Start Stripe webhook forwarding:
   ```bash
   stripe listen --forward-to http://localhost:3000/api/stripe/webhook
   ```
3. Go to `http://localhost:3000/booking`
4. Complete the wizard
5. Use test card: `4242 4242 4242 4242`, exp: `12/25`, CVC: `123`
6. Check your email inbox for the confirmation! 📧

## Email Template Features

The booking confirmation email includes:

✅ **Beautiful HTML Design**
- Green gradient header with checkmark icon
- Responsive layout (works on mobile)
- Inline CSS for maximum compatibility

✅ **Project Details Section**
- Project type
- Total amount
- Deposit paid (highlighted in green)
- Monthly payment (if applicable)
- Timeline in weeks

✅ **What Happens Next** (3 Steps)
- ✉️ Check email for receipt
- 📅 Kickoff call within 24 hours
- 🚀 Development begins

✅ **Important Information Box**
- Deposit policy explanation
- Blue border for emphasis

✅ **Contact Details**
- Customer email
- Customer phone (if provided)

✅ **Professional Footer**
- Copyright notice
- Security message

## Troubleshooting

### Email Not Sending

1. **Check API key**: Make sure `RESEND_API_KEY` is set in `.env.local`
2. **Restart dev server**: Environment variables are only loaded on startup
3. **Check Resend dashboard**: Go to **Logs** to see delivery status
4. **Check spam folder**: Test emails often go to spam

### "Domain Not Verified" Error

- You can still send emails from `onboarding@resend.dev` without verification
- Update `FROM_EMAIL` to use `@resend.dev` domain:
  ```bash
  FROM_EMAIL="TechKlein <onboarding@resend.dev>"
  ```

### Email Template Not Rendering

- Make sure `@react-email/render` is installed:
  ```bash
  cd apps/web
  pnpm install
  ```
- Check that email template exists at `apps/web/emails/booking-confirmation.tsx`

### Webhook Not Triggering

- Follow **STRIPE-SETUP.md** to set up Stripe CLI
- Make sure webhook secret is set in `.env.local`
- Check terminal for webhook forwarding logs

## Cost Breakdown

### Resend Free Tier
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Unlimited domains
- ✅ No credit card required

### Resend Pro ($20/month)
- ✅ 50,000 emails/month
- ✅ Analytics and tracking
- ✅ Priority support
- ✅ Team collaboration

**For your use case**: Free tier is more than enough (unless you get 100+ bookings per day! 🎉)

## Production Deployment

### Vercel Environment Variables

When deploying to Vercel, add these environment variables:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL="TechKlein <hello@erickharlein.com>"
```

1. Go to [vercel.com](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add both variables
5. Redeploy your app

### Email Best Practices

✅ **Use a verified domain** in production  
✅ **Monitor email logs** in Resend dashboard  
✅ **Add unsubscribe link** if sending marketing emails (not required for transactional emails)  
✅ **Test emails before going live** with real payment flow  
✅ **Keep templates simple** - avoid complex CSS or JavaScript  

## Next Steps

1. ✅ Get Resend API key (5 minutes)
2. ✅ Add to `.env.local` and restart dev server
3. ✅ Test with Stripe payment flow
4. ⏳ (Optional) Verify domain for branded emails
5. ⏳ Deploy to Vercel with production keys

## Support

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **React Email Docs**: [react.email](https://react.email)
- **Issues?**: Check Resend dashboard logs or reply to hello@erickharlein.com

---

**Ready to send beautiful confirmation emails! 🚀📧**
