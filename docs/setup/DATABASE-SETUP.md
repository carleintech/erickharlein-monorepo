# 🗄️ Supabase Database Setup - Manual Guide

## ✅ Status: **READY TO EXECUTE**

Your Supabase database schema is complete and ready to be applied!

---

## 🚀 Quick Setup (5 minutes)

### Option 1: Supabase Dashboard (RECOMMENDED)

1. **Open SQL Editor**
   ```
   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/sql/new
   ```

2. **Copy the Schema**
   - Open file: `infra/supabase-schema.sql`
   - Select all (Ctrl+A) and copy (Ctrl+C)

3. **Execute**
   - Paste into SQL Editor
   - Click **"Run"** button (or press Ctrl+Enter)
   - Wait for success message ✅

4. **Verify Tables**
   ```
   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/editor
   ```
   
   You should see 3 new tables:
   - ✅ `contact_submissions`
   - ✅ `booking_submissions`
   - ✅ `analytics_events`

---

### Option 2: PostgreSQL CLI (Advanced)

If you prefer command line:

```bash
# Update DATABASE_URL to use direct connection (not pooler)
# In .env.local, replace:
# DATABASE_URL=postgresql://postgres.ryxozbeowelrbhwejoid:7SVMszBFnaSVyuFo@aws-0-us-east-1.pooler.supabase.com:6543/postgres
# 
# With direct connection (change port 6543 → 5432):
DATABASE_URL=postgresql://postgres.ryxozbeowelrbhwejoid:7SVMszBFnaSVyuFo@aws-0-us-east-1.pooler.supabase.com:5432/postgres

# Then run:
psql $DATABASE_URL < infra/supabase-schema.sql
```

---

## 📊 What Gets Created

### Tables

#### 1. **contact_submissions**
- Stores contact form submissions
- Tracks email delivery status
- Includes metadata (IP, user agent, referrer)
- Status tracking: new → read → responded → archived

#### 2. **booking_submissions**
- Stores service booking requests
- Integrates with Stripe payments
- Tracks booking lifecycle
- Email delivery status
- Stores project metadata

#### 3. **analytics_events**
- Generic event tracking
- Session management
- Device and browser info
- JSONB for flexible event data

### Indexes
- ✅ Optimized for email lookups
- ✅ Date-based sorting
- ✅ Status filtering
- ✅ Stripe ID searches

### Security
- ✅ Row Level Security (RLS) enabled
- ✅ Service role: Full access
- ✅ Authenticated users: Read-only
- ✅ Anonymous: No access

### Views
- `recent_contacts` - Last 30 days
- `booking_stats` - Payment and status aggregates
- `daily_contact_volume` - Contact metrics by day
- `daily_booking_volume` - Booking metrics by day

### Functions
- `mark_contact_responded()` - Update contact status with notes
- `update_booking_status()` - Track booking lifecycle

---

## 🔍 Troubleshooting

### "Relation already exists" error
This means tables are already created. You can:
1. Drop existing tables in Table Editor
2. Or skip this error (it's harmless)

### Connection timeout
- Make sure you're logged into Supabase dashboard
- Check if your project is paused (free tier sleeps after inactivity)
- Visit your project to wake it up

### Permission denied
- Verify you're using the **service role key** (not anon key)
- Check your environment variables match the keys above

---

## ✅ After Setup

Once tables are created, update your API routes:

### 1. Contact Form (`apps/web/app/api/contact/route.ts`)

```typescript
import { createClient } from '@/lib/supabase'

// After email sending, save to database:
const supabase = createClient()

const { error: dbError } = await supabase
  .from('contact_submissions')
  .insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    message: data.message,
    ip_address: request.headers.get('x-forwarded-for') || 'unknown',
    user_agent: request.headers.get('user-agent') || 'unknown',
    referrer: request.headers.get('referer'),
    admin_email_sent: adminSuccess,
    visitor_email_sent: visitorSuccess,
    admin_email_id: adminEmail?.id,
    visitor_email_id: visitorEmail?.id,
  })

if (dbError) {
  console.error('Failed to save contact:', dbError)
}
```

### 2. Stripe Webhook (`apps/web/app/api/stripe/webhook/route.ts`)

```typescript
// After successful payment, save booking:
const { error } = await supabase
  .from('booking_submissions')
  .insert({
    service_name: session.metadata.service,
    stripe_session_id: session.id,
    stripe_payment_intent_id: session.payment_intent,
    payment_status: session.payment_status,
    amount_total: session.amount_total,
    currency: session.currency,
    client_name: session.customer_details?.name,
    client_email: session.customer_details?.email,
    metadata: session.metadata,
  })
```

---

## 🎉 Next Steps

1. ✅ Execute schema (5 min)
2. ✅ Update API routes (10 min)
3. ✅ Test contact form
4. ✅ Test booking flow
5. ✅ Deploy to production

**Need help?** Check `SYSTEM-STATUS.md` for overall project status!
