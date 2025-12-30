# Contact Form Email Setup

Your contact form is now configured to send emails to **erickharleinp@gmail.com** using Resend API.

## Quick Setup (5 minutes)

### 1. Create a Free Resend Account
- Go to [resend.com](https://resend.com)
- Sign up for a free account (100 emails/day free tier)

### 2. Get Your API Key
- After signing in, go to **API Keys** in the dashboard
- Click **Create API Key**
- Copy the API key (it starts with `re_...`)

### 3. Add API Key to Your Project

**For Local Development:**
Create a `.env.local` file in `apps/web/` directory:
```bash
RESEND_API_KEY=re_your_api_key_here
```

**For Vercel Production:**
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add:
   - Name: `RESEND_API_KEY`
   - Value: `re_your_api_key_here`
   - Environment: Production (and Preview if you want)
4. Click **Save**
5. Redeploy your site

### 4. Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check **erickharleinp@gmail.com** for the email

## Email Format
When someone submits the form, you'll receive an email with:
- Subject: "New Contact Form Submission from [Name]"
- Name, Email, Phone, Company
- Message content
- IP address and timestamp

## Troubleshooting

**No emails received?**
- Check spam folder
- Verify `RESEND_API_KEY` is set correctly
- Check Vercel deployment logs for errors
- Test locally first with `pnpm dev`

**Still not working?**
- The form will still work and log submissions to console
- You can check Vercel logs to see form submissions
- Alternative: Use SendGrid, Postmark, or NodeMailer

## Alternative: Gmail SMTP (if you prefer)
If you'd rather use Gmail directly instead of Resend, let me know and I can configure that instead!
