"use client";

import { useEffect, useId, useRef, useState } from "react";
import { submitContact } from "../lib/actions";

// A single extra input a channel wants beyond name/email (e.g. an order ID or
// a report reference). name/email/company are handled specially; every other
// field is folded, labeled, into the message the compliance/sales team sees.
export type DialogField = {
  key: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
};

export type Channel = {
  id: string;
  eyebrow: string;
  title: string;
  // One-line intent shown under the title inside the dialog.
  intent: string;
  icon: React.ReactNode;
  fields: DialogField[];
  textarea: { label: string; placeholder: string };
  submitLabel: string;
  // Optional reassurance line under the submit button (used for the dispute
  // channel to keep the FCRA rights path visible).
  footnote?: React.ReactNode;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2";

export default function ChannelDialog({
  channel,
  open,
  onClose,
}: {
  channel: Channel;
  open: boolean;
  onClose: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  // Reset the whole form each time the dialog is (re)opened so a channel never
  // shows stale input from a previous one.
  useEffect(() => {
    if (open) {
      // Intentional: reset all form state when the dialog (re)opens so a new
      // channel never inherits stale input from the previous one.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValues({});
      setMessage("");
      setErrors({});
      setServerError("");
      setSubmitted(false);
    }
  }, [open, channel.id]);

  // Scroll-lock the page + move focus into the panel while open. Restore focus
  // to whatever opened the dialog on close.
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        "input, textarea, button"
      );
      first?.focus();
    }, 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Minimal focus trap: keep Tab cycling inside the panel.
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>(
          'input, textarea, button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (nodes.length === 0) return;
        const list = Array.from(nodes).filter((n) => !n.hasAttribute("disabled"));
        const firstEl = list[0];
        const lastEl = list[list.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      opener?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    const next: Record<string, string> = {};
    for (const f of channel.fields) {
      const v = (values[f.key] ?? "").trim();
      if (f.required && !v) next[f.key] = `Please enter your ${f.label.toLowerCase()}.`;
      else if (f.type === "email" && v && !emailRe.test(v))
        next[f.key] = "Please enter a valid email address.";
    }
    if (!message.trim()) next.__message = "Please add a few details.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Fold the channel + any extra fields into one message so the receiving
    // team knows exactly which path this came through.
    const name = values.name ?? "";
    const email = values.email ?? "";
    const company = values.company ?? "";
    const extras = channel.fields
      .filter((f) => !["name", "email", "company"].includes(f.key) && values[f.key]?.trim())
      .map((f) => `${f.label}: ${values[f.key].trim()}`);
    const composed = [
      `Channel: ${channel.title}`,
      ...extras,
      "",
      message.trim(),
    ].join("\n");

    setSending(true);
    setServerError("");
    const res = await submitContact({ name, email, company, message: composed });
    setSending(false);
    if (res.ok) setSubmitted(true);
    else setServerError(res.error ?? "Something went wrong. Please try again.");
  };

  const setVal = (key: string, v: string) => setValues((s) => ({ ...s, [key]: v }));

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* Backdrop */}
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="dialog-backdrop absolute inset-0 bg-[#01201b]/55 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="dialog-panel relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl shadow-black/25 ring-1 ring-black/5"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-[#01463A] transition-colors ${focusRing}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-7 sm:p-8">
          {submitted ? (
            <div role="status" className="flex flex-col items-center py-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#01463A]">Request received.</h3>
              <p className="mt-2 max-w-sm text-sm text-gray-500">
                Thanks. The right person on our team will reach out to you soon.
              </p>
              <button
                onClick={onClose}
                className={`mt-6 min-h-[44px] rounded-xl bg-[#01463A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#058B74] ${focusRing}`}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15">
                  {channel.icon}
                </div>
                <div className="min-w-0 pr-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#058B74]">
                    {channel.eyebrow}
                  </p>
                  <h2 id={titleId} className="mt-0.5 text-xl font-bold leading-tight text-[#01463A]">
                    {channel.title}
                  </h2>
                  <p id={descId} className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {channel.intent}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-gray-100" />

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {channel.fields.map((f) => (
                  <DField
                    key={f.key}
                    field={f}
                    value={values[f.key] ?? ""}
                    onChange={(v) => setVal(f.key, v)}
                    error={errors[f.key]}
                  />
                ))}

                <div>
                  <label
                    htmlFor={`${channel.id}-msg`}
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                  >
                    {channel.textarea.label}
                    <span className="ml-0.5 text-[#058B74]">*</span>
                  </label>
                  <textarea
                    id={`${channel.id}-msg`}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={channel.textarea.placeholder}
                    aria-invalid={errors.__message ? "true" : undefined}
                    className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3 text-[16px] text-[#01463A] placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 ${
                      errors.__message ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.__message && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.__message}</p>
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
                  className={`min-h-[46px] w-full rounded-xl bg-[#01463A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#058B74] disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
                >
                  {sending ? "Sending…" : channel.submitLabel}
                </button>

                {channel.footnote && (
                  <p className="text-[11px] leading-relaxed text-gray-400">{channel.footnote}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function DField({
  field,
  value,
  onChange,
  error,
}: {
  field: DialogField;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const id = `dlg-${field.key}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500"
      >
        {field.label}
        {field.required && <span className="ml-0.5 text-[#058B74]">*</span>}
      </label>
      <input
        id={id}
        type={field.type ?? "text"}
        value={value}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? "true" : undefined}
        className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-[16px] text-[#01463A] placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
