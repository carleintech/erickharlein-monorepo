import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const supabase = (supabaseUrl && supabaseServiceKey) ? createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
}) : null;

export const supabaseClient = (accessToken?: string) => {
  if (!supabaseUrl) return null;
  
  if (accessToken) {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
    if (!serviceKey) return null;
    
    return createClient(supabaseUrl, serviceKey, {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }
  
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!anonKey) return null;
  
  return createClient(supabaseUrl, anonKey);
};
