import { createClient } from '@supabase/supabase-js';

// Lazy initialization to prevent build-time errors
let _supabase: ReturnType<typeof createClient> | null = null;

export const getSupabase = () => {
  if (_supabase) return _supabase;
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn("Supabase credentials not found");
    return null;
  }
  
  _supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  
  return _supabase;
};

// Legacy export for backward compatibility
export const supabase = typeof window === 'undefined' ? null : getSupabase();

export const supabaseClient = (accessToken?: string) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  
  if (!supabaseUrl) {
    console.warn("Supabase URL not found");
    return null;
  }
  
  if (accessToken) {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
    if (!serviceKey) {
      console.warn("Supabase service key not found");
      return null;
    }
    
    return createClient(supabaseUrl, serviceKey, {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }
  
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!anonKey) {
    console.warn("Supabase anon key not found");
    return null;
  }
  
  return createClient(supabaseUrl, anonKey);
};
