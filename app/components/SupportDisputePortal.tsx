"use client";

import { useState } from "react";
import { submitSupportTicket, type TicketCategory } from "../lib/actions";

type Errors = { name?: string; email?: string; message?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2";

const inputCls = (error?: string) =>
  `w-full text-[16px] text-[#01463A] placeholder-gray-400 bg-gray-50 border rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all ${
    error ? "border-red-500" : "border-gray-200"
  }`;

const TABS: { id: TicketCategory; label: string; blurb: string }[] = [
  {
    id: "support",
    label: "Support request",
    blurb: "Get help with your account, an order, or the platform.",
  },
  {
    id: "dispute",
    label: "Dispute a report",
    blurb:
      "Challenge the accuracy of a completed report. Our compliance team reviews it under the FCRA and applicable state law.",
  },
];

export default function SupportDisputePortal() {
  const [category, setCategory] = useState<TicketCategory>("support");
  const [form, setForm] = useState({ name: "", email: "", reference: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);

  const active = TABS.find((t) => t.id === category)!;

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim()) {
      next.message =
        category === "dispute"
          ? "Please describe what you believe is inaccurate."
          : "Please describe what you need help with.";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setServerError("");
    const res = await submitSupportTicket({
      category,
      name: form.name,
      email: form.email,
      reference: form.reference,
      message: form.message,
    });
    setSending(false);
    if (res.ok && res.ticketNumber) {
      setTicketNumber(res.ticketNumber);
    } else {
      setServerError(res.error ?? "Something went wrong. Please try again.");
    }
  };

  const reset = () => {
    setTicketNumber(null);
    setForm({ name: "", email: "", reference: "", message: "" });
    setErrors({});
    setServerError("");
  };

  return (
    <div className="not-prose rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div aria-live="polite">
        {ticketNumber ? (
          <div role="status" className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#01463A]">Ticket received.</h3>
            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Your reference number is below. Keep it for any follow-up. Our team has
              been alerted and will respond to the email you provided.
            </p>
            <p className="mt-5 rounded-xl border border-[#058B74]/20 bg-[#058B74]/5 px-5 py-3 font-mono text-lg font-semibold tracking-wide text-[#01463A]">
              {ticketNumber}
            </p>
            <button
              type="button"
              onClick={reset}
              className={`mt-6 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-[#01463A] transition-colors hover:border-[#058B74]/40 hover:bg-[#058B74]/5 ${focusRing}`}
            >
              Submit another ticket
            </button>
          </div>
        ) : (
          <>
            {/* Category toggle */}
            <div
              role="tablist"
              aria-label="Ticket type"
              className="mb-5 inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1"
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={category === t.id}
                  onClick={() => {
                    setCategory(t.id);
                    setErrors({});
                    setServerError("");
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${focusRing} ${
                    category === t.id
                      ? "bg-[#01463A] text-white"
                      : "text-gray-500 hover:text-[#01463A]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <p className="mb-6 max-w-prose text-sm leading-relaxed text-gray-500">{active.blurb}</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field
                id="portal-name"
                label="Full name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id="portal-email"
                type="email"
                label="Email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
                error={errors.email}
                autoComplete="email"
              />
              <Field
                id="portal-reference"
                label={category === "dispute" ? "Report reference number" : "Account or order ID"}
                value={form.reference}
                onChange={(v) => setForm({ ...form, reference: v })}
                placeholder={
                  category === "dispute"
                    ? "Found on your report or notice, if available"
                    : "Optional. Helps us find you faster"
                }
              />
              <div>
                <label
                  htmlFor="portal-message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                >
                  {category === "dispute" ? "What information is inaccurate?" : "How can we help?"}
                  <span className="ml-0.5 text-[#058B74]">*</span>
                </label>
                <textarea
                  id="portal-message"
                  rows={5}
                  value={form.message}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "portal-message-error" : undefined}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    category === "dispute"
                      ? "Describe the item(s) you believe are inaccurate or incomplete…"
                      : "Describe the issue or question…"
                  }
                  className={`${inputCls(errors.message)} resize-none`}
                />
                {errors.message && (
                  <p id="portal-message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p role="alert" className="text-xs text-red-600">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className={`w-full min-h-[44px] rounded-xl bg-[#01463A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#058B74] disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
              >
                {sending ? "Submitting…" : "Submit ticket"}
              </button>

              {category === "dispute" && (
                <p className="text-[11px] leading-relaxed text-gray-400">
                  Your dispute rights are preserved. You can also email{" "}
                  <a
                    href="mailto:compliance@atlasscreening.com"
                    className={`underline hover:text-[#058B74] ${focusRing}`}
                  >
                    compliance@atlasscreening.com
                  </a>
                  . Atlas provides consumer reports; employers make hiring decisions.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500"
      >
        {label}
        {required && <span className="ml-0.5 text-[#058B74]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputCls(error)}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
