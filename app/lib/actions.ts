"use server";

import { createSupabaseServerClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";

export type ActionResult = { ok: boolean; error?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Contact form → contact_submissions. Public insert is allowed by RLS.
export async function submitContact(input: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): Promise<ActionResult> {
  const name = input.name?.trim();
  const email = input.email?.trim();
  const message = input.message?.trim();
  const company = input.company?.trim() || null;

  if (!name || !email || !message) return { ok: false, error: "Missing required fields." };
  if (!emailRe.test(email)) return { ok: false, error: "Please enter a valid email address." };

  // No backend configured yet — accept gracefully so the UX still works.
  if (!isSupabaseConfigured()) return { ok: true };

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("contact_submissions")
    .insert({ name, email, company, message });

  if (error) return { ok: false, error: "Something went wrong. Please try again." };
  return { ok: true };
}

// Newsletter signup → newsletter_signups. Duplicate emails are treated as success.
export async function subscribeNewsletter(email: string): Promise<ActionResult> {
  const clean = email?.trim().toLowerCase();
  if (!clean || !emailRe.test(clean)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!isSupabaseConfigured()) return { ok: true };

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("newsletter_signups")
    .insert({ email: clean, source: "blog" });

  // 23505 = unique violation → already subscribed, which is fine.
  if (error && error.code !== "23505") {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
  return { ok: true };
}
