-- ============================================
-- 🗄️ SUPABASE DATABASE SCHEMA
-- ============================================
-- Project: techklein-portfolio
-- Database: erickharlein-db
-- Purpose: Store contact form submissions, bookings, and analytics

-- ============================================
-- 1. CONTACT FORM SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Contact Information
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT NOT NULL,
    
    -- Metadata
    ip_address TEXT,
    user_agent TEXT,
    referrer TEXT,
    
    -- Status Tracking
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
    responded_at TIMESTAMP WITH TIME ZONE,
    response_notes TEXT,
    
    -- Email Tracking
    admin_email_sent BOOLEAN DEFAULT false,
    visitor_email_sent BOOLEAN DEFAULT false,
    admin_email_id TEXT,
    visitor_email_id TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow service role to do everything
CREATE POLICY "Service role has full access" 
ON contact_submissions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Create policy: Allow authenticated users to read
CREATE POLICY "Authenticated users can read" 
ON contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- ============================================
-- 2. BOOKING SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS booking_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Service Information
    service_type TEXT NOT NULL,
    timeline TEXT NOT NULL,
    budget TEXT,
    description TEXT,
    
    -- Client Information
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    client_company TEXT,
    
    -- Payment Information
    stripe_session_id TEXT UNIQUE,
    stripe_payment_intent_id TEXT,
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
    amount_total INTEGER, -- in cents
    currency TEXT DEFAULT 'usd',
    
    -- Metadata
    ip_address TEXT,
    user_agent TEXT,
    referrer TEXT,
    
    -- Booking Status
    booking_status TEXT DEFAULT 'pending' CHECK (booking_status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
    confirmed_at TIMESTAMP WITH TIME ZONE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    
    -- Email Tracking
    confirmation_email_sent BOOLEAN DEFAULT false,
    confirmation_email_id TEXT,
    admin_notification_sent BOOLEAN DEFAULT false,
    admin_notification_id TEXT,
    
    -- Notes
    admin_notes TEXT,
    client_notes TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_booking_submissions_email ON booking_submissions(client_email);
CREATE INDEX IF NOT EXISTS idx_booking_submissions_created_at ON booking_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_booking_submissions_stripe_session ON booking_submissions(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_booking_submissions_payment_status ON booking_submissions(payment_status);
CREATE INDEX IF NOT EXISTS idx_booking_submissions_booking_status ON booking_submissions(booking_status);

-- Enable Row Level Security (RLS)
ALTER TABLE booking_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow service role to do everything
CREATE POLICY "Service role has full access" 
ON booking_submissions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Create policy: Allow authenticated users to read
CREATE POLICY "Authenticated users can read" 
ON booking_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- ============================================
-- 3. ANALYTICS EVENTS TABLE (Optional)
-- ============================================
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Event Information
    event_type TEXT NOT NULL, -- 'page_view', 'button_click', 'form_submit', etc.
    event_name TEXT NOT NULL,
    event_data JSONB,
    
    -- User Information
    session_id TEXT,
    user_id TEXT,
    ip_address TEXT,
    user_agent TEXT,
    
    -- Page Information
    page_path TEXT,
    page_title TEXT,
    referrer TEXT,
    
    -- Device Information
    device_type TEXT, -- 'desktop', 'mobile', 'tablet'
    browser TEXT,
    os TEXT
);

-- Create indexes for analytics
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_page_path ON analytics_events(page_path);

-- Enable Row Level Security (RLS)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow service role to do everything
CREATE POLICY "Service role has full access" 
ON analytics_events 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- ============================================
-- 4. USEFUL VIEWS FOR ANALYTICS
-- ============================================

-- View: Recent Contact Submissions
CREATE OR REPLACE VIEW recent_contacts AS
SELECT 
    id,
    created_at,
    name,
    email,
    company,
    status,
    admin_email_sent,
    visitor_email_sent
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 100;

-- View: Booking Statistics
CREATE OR REPLACE VIEW booking_stats AS
SELECT 
    booking_status,
    payment_status,
    COUNT(*) as count,
    SUM(amount_total) / 100.0 as total_revenue,
    AVG(amount_total) / 100.0 as avg_booking_value
FROM booking_submissions
GROUP BY booking_status, payment_status;

-- View: Daily Contact Volume
CREATE OR REPLACE VIEW daily_contact_volume AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as submissions,
    COUNT(DISTINCT email) as unique_emails,
    SUM(CASE WHEN admin_email_sent THEN 1 ELSE 0 END) as emails_sent
FROM contact_submissions
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- View: Daily Booking Volume
CREATE OR REPLACE VIEW daily_booking_volume AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as bookings,
    SUM(CASE WHEN payment_status = 'completed' THEN 1 ELSE 0 END) as paid_bookings,
    SUM(CASE WHEN payment_status = 'completed' THEN amount_total ELSE 0 END) / 100.0 as revenue
FROM booking_submissions
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- ============================================
-- 5. HELPFUL FUNCTIONS
-- ============================================

-- Function: Mark contact as responded
CREATE OR REPLACE FUNCTION mark_contact_responded(contact_id UUID, notes TEXT DEFAULT NULL)
RETURNS void AS $$
BEGIN
    UPDATE contact_submissions
    SET 
        status = 'responded',
        responded_at = NOW(),
        response_notes = COALESCE(notes, response_notes)
    WHERE id = contact_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Update booking status
CREATE OR REPLACE FUNCTION update_booking_status(
    booking_id UUID,
    new_status TEXT,
    notes TEXT DEFAULT NULL
)
RETURNS void AS $$
BEGIN
    UPDATE booking_submissions
    SET 
        booking_status = new_status,
        admin_notes = COALESCE(notes, admin_notes),
        confirmed_at = CASE WHEN new_status = 'confirmed' AND confirmed_at IS NULL THEN NOW() ELSE confirmed_at END,
        started_at = CASE WHEN new_status = 'in_progress' AND started_at IS NULL THEN NOW() ELSE started_at END,
        completed_at = CASE WHEN new_status = 'completed' AND completed_at IS NULL THEN NOW() ELSE completed_at END
    WHERE id = booking_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- SETUP COMPLETE!
-- ============================================
-- To run this schema:
-- 1. Go to Supabase Dashboard → SQL Editor
-- 2. Click "New Query"
-- 3. Paste this entire file
-- 4. Click "Run"
--
-- Your database will now have:
-- ✅ contact_submissions table
-- ✅ booking_submissions table
-- ✅ analytics_events table
-- ✅ Helpful views for reporting
-- ✅ Row Level Security enabled
-- ✅ Optimized indexes
