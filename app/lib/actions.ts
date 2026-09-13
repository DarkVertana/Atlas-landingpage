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

// ─────────────────────────────────────────────────────────────
// Support & Dispute portal → support_tickets
// Generates a human-facing ticket number, stores the ticket, and alerts
// admin/tech by email. Public insert is allowed by RLS.
// ─────────────────────────────────────────────────────────────
export type TicketCategory = "support" | "dispute";
export type TicketResult = ActionResult & { ticketNumber?: string };

// e.g. ATL-20260913-7Q4K — date for at-a-glance sorting, suffix for uniqueness.
function generateTicketNumber(): string {
  const d = new Date();
  const ymd =
    `${d.getFullYear()}` +
    `${String(d.getMonth() + 1).padStart(2, "0")}` +
    `${String(d.getDate()).padStart(2, "0")}`;
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ATL-${ymd}-${suffix}`;
}

// Fire an alert to admin/tech via the Resend REST API (no SDK dependency).
// Silently no-ops when unconfigured so ticket creation never fails on email.
async function sendTicketAlert(ticket: {
  ticketNumber: string;
  category: TicketCategory;
  name: string;
  email: string;
  reference: string | null;
  message: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TICKET_ALERT_TO;
  // Sender follows the shared EMAIL_FROM convention; TICKET_ALERT_FROM can override.
  const from =
    process.env.TICKET_ALERT_FROM ??
    process.env.EMAIL_FROM ??
    "Atlas Screening <onboarding@resend.dev>";
  if (!apiKey || !to) return;

  const kind = ticket.category === "dispute" ? "Dispute" : "Support request";
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2>New ${esc(kind.toLowerCase())} · ${esc(ticket.ticketNumber)}</h2>
    <p><strong>From:</strong> ${esc(ticket.name)} &lt;${esc(ticket.email)}&gt;</p>
    ${ticket.reference ? `<p><strong>Reference:</strong> ${esc(ticket.reference)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(ticket.message)}</p>`;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: ticket.email,
        subject: `[${ticket.ticketNumber}] ${kind} from ${ticket.name}`,
        html,
      }),
    });
  } catch {
    // Alerting is best-effort; the ticket is already stored for the admin panel.
  }
}

export async function submitSupportTicket(input: {
  category: TicketCategory;
  name: string;
  email: string;
  reference?: string;
  message: string;
}): Promise<TicketResult> {
  const category: TicketCategory = input.category === "dispute" ? "dispute" : "support";
  const name = input.name?.trim();
  const email = input.email?.trim();
  const message = input.message?.trim();
  const reference = input.reference?.trim() || null;

  if (!name || !email || !message) return { ok: false, error: "Missing required fields." };
  if (!emailRe.test(email)) return { ok: false, error: "Please enter a valid email address." };

  const ticketNumber = generateTicketNumber();

  // No backend configured yet — still return a ticket number so the UX works.
  if (!isSupabaseConfigured()) return { ok: true, ticketNumber };

  const supabase = await createSupabaseServerClient();

  // Insert, retrying once if the random ticket number happens to collide.
  let finalNumber = ticketNumber;
  let error = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    const res = await supabase
      .from("support_tickets")
      .insert({ ticket_number: finalNumber, category, name, email, reference, message });
    error = res.error;
    if (!error) break;
    if (error.code === "23505") {
      finalNumber = generateTicketNumber();
      continue;
    }
    break;
  }

  if (error) return { ok: false, error: "Something went wrong. Please try again." };

  await sendTicketAlert({ ticketNumber: finalNumber, category, name, email, reference, message });
  return { ok: true, ticketNumber: finalNumber };
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
