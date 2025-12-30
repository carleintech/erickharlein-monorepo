# 🗄️ Supabase Database Setup - Complete Guide

## ✅ Status: CONFIGURED

Your Supabase database is now connected to your portfolio!

**Project:** techklein-portfolio  
**Database:** erickharlein-db  
**Region:** US East (aws-0-us-east-1)

---

## 🚀 Quick Start

### Step 1: Run Database Schema

1. Go to: [Supabase SQL Editor](https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/sql/new)
2. Click "New Query"
3. Copy the contents of `infra/supabase-schema.sql`
4. Paste into the SQL editor
5. Click "Run" (or press Ctrl+Enter)

**This will create:**
- ✅ `contact_submissions` table
- ✅ `booking_submissions` table  
- ✅ `analytics_events` table
- ✅ Helpful views for reporting
- ✅ Row Level Security (RLS)
- ✅ Optimized indexes

### Step 2: Install Supabase Client

```bash
pnpm install @supabase/supabase-js
```

### Step 3: Restart Dev Server

```bash
pnpm dev
```

---

## 📊 Database Tables

### 1. contact_submissions

Stores every contact form submission.

**Columns:**
- `id` - Unique identifier
- `created_at` - Submission timestamp
- `name, email, phone, company` - Contact details
- `message` - The message content
- `ip_address, user_agent, referrer` - Metadata
- `status` - new | read | responded | archived
- `admin_email_sent, visitor_email_sent` - Email tracking
- `response_notes` - Your notes about the conversation

**Usage:**
```sql
-- View recent contacts
SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10;

-- Find contacts needing response
SELECT * FROM contact_submissions WHERE status = 'new';

-- Search by email
SELECT * FROM contact_submissions WHERE email LIKE '%@example.com';
```

### 2. booking_submissions

Stores every booking with payment information.

**Columns:**
- `id` - Unique identifier
- `created_at` - Booking timestamp
- `service_type, timeline, budget, description` - Service details
- `client_name, client_email, client_phone, client_company` - Client info
- `stripe_session_id, stripe_payment_intent_id` - Stripe IDs
- `payment_status` - pending | processing | completed | failed | refunded
- `booking_status` - pending | confirmed | in_progress | completed | cancelled
- `amount_total` - Payment amount (in cents)

**Usage:**
```sql
-- View recent bookings
SELECT * FROM booking_submissions ORDER BY created_at DESC LIMIT 10;

-- Calculate total revenue
SELECT SUM(amount_total) / 100.0 as total_revenue 
FROM booking_submissions 
WHERE payment_status = 'completed';

-- Find pending bookings
SELECT * FROM booking_submissions WHERE booking_status = 'pending';
```

### 3. analytics_events

Tracks user behavior and interactions (optional).

**Columns:**
- `id` - Unique identifier
- `created_at` - Event timestamp
- `event_type, event_name` - Event classification
- `event_data` - JSON data
- `page_path, referrer` - Navigation info
- `device_type, browser, os` - Device info

---

## 📈 Helpful Views

### `recent_contacts`
Quick view of last 100 contact submissions.

```sql
SELECT * FROM recent_contacts;
```

### `booking_stats`
Summary statistics by status.

```sql
SELECT * FROM booking_stats;
```

### `daily_contact_volume`
Daily contact form metrics.

```sql
SELECT * FROM daily_contact_volume WHERE date >= CURRENT_DATE - INTERVAL '30 days';
```

### `daily_booking_volume`
Daily booking and revenue metrics.

```sql
SELECT * FROM daily_booking_volume WHERE date >= CURRENT_DATE - INTERVAL '30 days';
```

---

## 🔧 Updating API Routes

### Contact Form Integration

Update `apps/web/app/api/contact/route.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// After email sending, store in database:
const { data, error } = await supabase
  .from('contact_submissions')
  .insert([{
    name: validatedData.name,
    email: validatedData.email,
    phone: validatedData.phone,
    company: validatedData.company,
    message: validatedData.message,
    ip_address: contactData.ip_address,
    user_agent: contactData.user_agent,
    admin_email_sent: emailResults.adminNotification,
    visitor_email_sent: emailResults.visitorAutoReply,
  }]);
```

### Stripe Webhook Integration

Update `apps/web/app/api/stripe/webhook/route.ts`:

```typescript
// When checkout.session.completed:
const session = event.data.object;

const { data, error } = await supabase
  .from('booking_submissions')
  .insert([{
    stripe_session_id: session.id,
    stripe_payment_intent_id: session.payment_intent,
    payment_status: 'completed',
    amount_total: session.amount_total,
    currency: session.currency,
    // ... other fields from session metadata
  }]);
```

---

## 🎯 Admin Dashboard (Future)

You can build an admin dashboard to:

- View all contacts and bookings
- Mark contacts as responded
- Update booking status
- View analytics and charts
- Export data to CSV
- Send follow-up emails

Example queries for dashboard:

```sql
-- Today's stats
SELECT 
  (SELECT COUNT(*) FROM contact_submissions WHERE DATE(created_at) = CURRENT_DATE) as contacts_today,
  (SELECT COUNT(*) FROM booking_submissions WHERE DATE(created_at) = CURRENT_DATE) as bookings_today,
  (SELECT SUM(amount_total)/100.0 FROM booking_submissions WHERE DATE(created_at) = CURRENT_DATE AND payment_status = 'completed') as revenue_today;

-- Conversion rate
SELECT 
  COUNT(*) as total_contacts,
  (SELECT COUNT(*) FROM booking_submissions WHERE payment_status = 'completed') as total_bookings,
  ROUND((SELECT COUNT(*) FROM booking_submissions WHERE payment_status = 'completed')::NUMERIC / COUNT(*) * 100, 2) as conversion_rate
FROM contact_submissions;
```

---

## 🔐 Security

### Row Level Security (RLS)

Your database has RLS enabled. This means:

✅ **Service role** (backend) can do everything  
✅ **Authenticated users** can only read  
❌ **Anonymous users** cannot access data directly

To query from frontend (requires authentication):

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// This will be restricted by RLS policies
const { data, error } = await supabase
  .from('contact_submissions')
  .select('*');
```

---

## 📊 Monitoring

### Supabase Dashboard

Monitor your database:
- [Table Editor](https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/editor)
- [SQL Editor](https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/sql)
- [Database Performance](https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/database/roles)

### Useful Queries

```sql
-- Storage usage
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Recent activity
SELECT 
  'Contacts' as source,
  COUNT(*) as count,
  MAX(created_at) as last_activity
FROM contact_submissions
WHERE created_at >= NOW() - INTERVAL '7 days'
UNION ALL
SELECT 
  'Bookings' as source,
  COUNT(*) as count,
  MAX(created_at) as last_activity
FROM booking_submissions
WHERE created_at >= NOW() - INTERVAL '7 days';
```

---

## 🚀 Next Steps

1. **Run the schema** in Supabase SQL Editor
2. **Install @supabase/supabase-js**: `pnpm install @supabase/supabase-js`
3. **Update API routes** to save data to Supabase
4. **Test the integration** by submitting forms
5. **View data** in Supabase Table Editor

---

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [SQL Editor](https://supabase.com/docs/guides/database/overview)

---

## ✅ Configuration Summary

```env
NEXT_PUBLIC_SUPABASE_URL=https://ryxozbeowelrbhwejoid.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
DATABASE_URL=postgresql://postgres.ryxozbeowelrbhwejoid:7SVMszBFnaSVyuFo@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

**Your database is ready! 🎉**

Run the schema, install the client, and start storing data.
