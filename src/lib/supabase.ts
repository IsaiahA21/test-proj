// import { createClient } from '@supabase/supabase-js';

/**
 *  anonymous key (Anon Key), intended for public-facing operations. 
 * It allows users, including unauthenticated ones, to perform only the actions permitted 
 * by the Supabase security policies (Row-Level Security or RLS).
 * 
 * Scope: Limited to public read and write operations allowed under the current database policies.
Use Cases:
Public-facing frontend applications.
User authentication, fetching public data, or operations that don't require elevated privileges.
 */
/*
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);*/



/***
 * This client uses the service role key, 
 * which provides full access to the database, bypassing Row-Level Security (RLS)
 */
/*
export const supabaseAdmin = createClient (
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!
);*/

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function mycreateClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}