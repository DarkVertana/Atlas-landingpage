import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

// Server-side Supabase client bound to the request cookies. Used for auth-aware
// reads/writes: the public site reads published posts anonymously, and the admin
// panel reads/writes as the signed-in user (RLS grants authenticated full access).
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component (read-only cookies) — safe to ignore;
          // middleware refreshes the session on the next request.
        }
      },
    },
  });
}
