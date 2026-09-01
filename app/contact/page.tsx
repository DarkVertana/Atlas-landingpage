"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import ChannelDialog, { type Channel } from "../components/ChannelDialog";
import { submitContact } from "../lib/actions";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

// Shared icon props for the channel glyphs.
const ico = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// The three "other ways to reach us" channels. Each opens an on-page dialog
// with an intent-specific form that posts through the same submitContact action.
const CHANNELS: Channel[] = [
  {
    id: "demo",
    eyebrow: "Enterprise sales inquiries",
    title: "Request a platform demo",
    intent:
      "Tell us about your program and we'll tailor a walkthrough of bundles, API, and volume pricing.",
    icon: (
      <svg {...ico}>
        <path d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16" />
        <path d="M3 21h18" />
        <path d="M9 9h1M9 13h1M14 9h1M14 13h1M9 17h6" />
      </svg>
    ),
    fields: [
      { key: "name", label: "Name", required: true, autoComplete: "name" },
      { key: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      { key: "company", label: "Company", required: true, autoComplete: "organization" },
      { key: "volume", label: "Est. monthly volume", placeholder: "e.g. 50–200 checks" },
    ],
    textarea: {
      label: "What are you looking to screen?",
      placeholder: "Roles, timelines, current tools, or anything else we should know…",
    },
    submitLabel: "Request demo",
  },
  {
    id: "support",
    eyebrow: "Employer support",
    title: "Open a support ticket",
    intent:
      "Already a client? Get help with your dashboard, billing, or the status of a screening.",
    icon: (
      <svg {...ico}>
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    fields: [
      { key: "name", label: "Name", required: true, autoComplete: "name" },
      { key: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      { key: "account", label: "Account or order ID", placeholder: "Optional. Helps us find you faster" },
    ],
    textarea: {
      label: "What do you need help with?",
      placeholder: "Describe the issue or question…",
    },
    submitLabel: "Submit ticket",
  },
  {
    id: "dispute",
    eyebrow: "Applicant dispute resolution",
    title: "Initiate the dispute process",
    intent:
      "Challenge the accuracy of a completed report. Our compliance team reviews it under the FCRA and state law.",
    icon: (
      <svg {...ico}>
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    fields: [
      { key: "name", label: "Full name", required: true, autoComplete: "name" },
      { key: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { key: "reference", label: "Report reference number", placeholder: "Found on your report or notice, if available" },
    ],
    textarea: {
      label: "What information is inaccurate?",
      placeholder: "Describe the item(s) you believe are inaccurate or incomplete…",
    },
    submitLabel: "Submit dispute",
    footnote: (
      <>
        Your dispute rights are preserved. You can also email{" "}
        <a href="mailto:compliance@atlasscreening.com" className="underline hover:text-[#058B74]">
          compliance@atlasscreening.com
        </a>
        . Atlas provides consumer reports; employers make hiring decisions.
      </>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const [openChannel, setOpenChannel] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) next.message = "Please tell us how we can help.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setServerError("");
    const res = await submitContact(formData);
    setSending(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setServerError(res.error ?? "Something went wrong. Please try again.");
    }
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2";

  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold tracking-widest uppercase text-white/90 mb-4"
          >
            Contact Atlas
          </Reveal>
          <Reveal
            as="h1"
            variant="up"
            delay={100}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Connect with Atlas screening experts.
          </Reveal>
          <Reveal
            as="p"
            variant="fade"
            delay={200}
            className="mt-5 text-white/90 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Whether you need a custom enterprise screening package or require technical
            support for an ongoing order, our team is ready to assist.
          </Reveal>
        </div>
      </section>

      {/* Primary — form (left) + supporting details (right) */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — the primary action: the form */}
          <Reveal
            as="div"
            variant="right"
            delay={100}
            className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm"
          >
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#058B74] mb-3">
              Send us a message
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#01463A] leading-tight mb-6">
              Tell us how we can help.
            </h2>

            <div aria-live="polite">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#01463A]">Message received.</h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-sm">
                    Thanks for reaching out. The right person on our team will
                    reach out to you soon.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                  <Field
                    id="contact-name"
                    label="Name"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    required
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    id="contact-email"
                    type="email"
                    label="Work email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    required
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    id="contact-company"
                    label="Company"
                    value={formData.company}
                    onChange={(v) => setFormData({ ...formData, company: v })}
                    autoComplete="organization"
                  />
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5"
                    >
                      Message
                      <span className="text-[#058B74] ml-0.5">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your workflow or timelines…"
                      className={`w-full text-[16px] text-[#01463A] placeholder-gray-400 bg-gray-50 border rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
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
                    className={`w-full min-h-[44px] bg-[#01463A] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${focusRing}`}
                  >
                    {sending ? "Sending…" : "Send message"}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    By submitting, you agree to our{" "}
                    <a href="/terms" className={`underline hover:text-[#058B74] rounded ${focusRing}`}>Terms</a>{" "}
                    and{" "}
                    <a href="/privacy" className={`underline hover:text-[#058B74] rounded ${focusRing}`}>Privacy</a>.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Right — supporting copy + support hours (sticky: stays in view
              while the form scrolls on tall screens) */}
          <div className="lg:pl-8 lg:pt-4">
            <div className="lg:sticky lg:top-28">
              <Reveal as="p" variant="fade" className="text-xs font-semibold tracking-[0.24em] uppercase text-[#058B74] mb-4">
                Say hello
              </Reveal>
            <Reveal as="h2" variant="left" delay={100} className="text-3xl md:text-4xl font-bold text-[#01463A] leading-[1.1]">
              Humans on <span className="text-[#058B74]">standby</span>.
            </Reveal>
            <Reveal as="p" variant="fade" delay={200} className="mt-5 text-sm text-gray-500 leading-relaxed max-w-md">
              No form letters, no ticket queues. Share a few details and the right
              person on our team will reach out to you soon.
            </Reveal>

            <Reveal
              as="div"
              variant="fade"
              delay={300}
              className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_28px_56px_-30px_rgba(4,20,14,0.6)]"
            >
              <Image
                src="/assets/images/global-support-globe.jpg"
                alt="Atlas Screening supports clients across the globe"
                fill
                sizes="(max-width: 1024px) 92vw, 540px"
                className="object-cover"
              />
              {/* readability scrim so the copy always reads over the globe */}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#02120d] via-[#02120d]/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5EE3C0]">
                  Global support
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  We work across time zones
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Wherever you are, send us a note and our team will reach out soon.
                </p>
              </div>
            </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary — channel cards */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#058B74] mb-6">
            Other ways to reach us
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {CHANNELS.map((ch, i) => (
              <Reveal
                key={ch.id}
                as="button"
                variant="up"
                delay={i * 100}
                onClick={() => setOpenChannel(ch.id)}
                aria-haspopup="dialog"
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 ${focusRing}`}
              >
                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-1 flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15 transition-colors group-hover:bg-[#058B74] group-hover:text-white">
                    {ch.icon}
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                    {ch.eyebrow}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#01463A]">{ch.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">{ch.intent}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#01463A] transition-colors group-hover:text-[#058B74]">
                    {ch.submitLabel}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-page channel dialogs — one mounts at a time based on openChannel. */}
      {CHANNELS.map((ch) => (
        <ChannelDialog
          key={ch.id}
          channel={ch}
          open={openChannel === ch.id}
          onClose={() => setOpenChannel(null)}
        />
      ))}

      {/* Bottom CTA */}
      <CTASection
        eyebrow="Prefer to skip the form?"
        title={
          <>
            Start screening<br className="hidden lg:block" /> in minutes.
          </>
        }
        description="Create an account and run your first check today. No contracts, no setup fees."
        primary={{ label: "Start a conversation", href: "#contact-form" }}
        secondary={{ label: "Email sales", href: "mailto:contact@atlasscreening.com" }}
      />

    </main>
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
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5"
      >
        {label}
        {required && <span className="text-[#058B74] ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full text-[16px] text-[#01463A] placeholder-gray-400 bg-gray-50 border rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
