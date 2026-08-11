"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "../../lib/supabase/browser";
import { isSupabaseConfigured } from "../../lib/supabase/config";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const configured = isSupabaseConfigured();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!configured) {
      setError("Supabase isn't configured yet. Add your keys to .env.local first.");
      return;
    }
    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("Incorrect email or password.");
      return;
    }
    router.replace(next);
    router.refresh();
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white">
          Atlas
        </span>
        <span className="ml-2 rounded-md bg-[#3EE8BE]/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3EE8BE]">
          Admin
        </span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur">
        <h1 className="text-lg font-semibold text-white">Sign in</h1>
        <p className="mt-1 text-sm text-white/50">Manage posts, leads, and subscribers.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#3EE8BE]/50 focus:ring-2 focus:ring-[#3EE8BE]/20"
              placeholder="you@atlasscreening.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-white/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#3EE8BE]/50 focus:ring-2 focus:ring-[#3EE8BE]/20"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#3EE8BE] px-4 py-2.5 text-sm font-semibold text-[#01221B] transition hover:bg-[#2fd9af] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EE8BE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01221B]"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-xs text-white/30">
        Atlas Screening · Internal admin
      </p>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(120%_100%_at_50%_-10%,#04372b_0%,#01221B_55%,#010f0b_100%)] px-6">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
