"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-[#01463A]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Contact Atlas
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Let&apos;s talk screening.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Tell us about your team. We reply in under an hour during business
            days — with a real person, never a form letter.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5">
            <a
              href="mailto:hello@atlasscreening.com"
              className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 7l10 6 10-6" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Email us
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  hello@atlasscreening.com
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Drop a line and watch your inbox — we land on it before your coffee goes cold.
                </p>
              </div>
            </a>

            <button
              type="button"
              className="group text-left relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Live chat
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  Chat with us
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Pop the bubble in the corner. No bots, no menus — just a teammate on the other end.
                </p>
              </div>
            </button>

            <a
              href="tel:+15550123456"
              className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V21a1 1 0 01-1.08 1 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A1 1 0 014.11 3h4.09a1 1 0 011 .75 12.6 12.6 0 00.7 2.81 1 1 0 01-.22 1L7.91 9.09a16 16 0 006 6l1.52-1.76a1 1 0 011-.23 12.6 12.6 0 002.81.71 1 1 0 01.76 1z" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Call us
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  (555) 012-3456
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Old school? Us too. Dial in and talk screening with a human who knows the product.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Split — details (left) + form (right) */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — minimal */}
          <div className="lg:pr-8 lg:pt-4">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#058B74] mb-4">
              Say hello
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-[1.1]">
              Humans on <span className="text-[#058B74]">standby</span>.
            </h2>
            <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-md">
              No form letters, no ticket queues. Share a few details and the right
              person on our team will pick it up — usually within the hour.
            </p>

            <div className="relative mt-10">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#01463A] to-[#058B74] aspect-[4/3] shadow-xl shadow-[#058B74]/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp"
                  alt="Atlas support agent helping a customer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating quick-contact card */}
              <div className="absolute -bottom-6 -right-6 z-10 bg-white rounded-2xl shadow-xl shadow-[#01463A]/15 border border-gray-100 px-5 py-4 w-[230px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-[#0aa88a] animate-ping opacity-75" />
                    <span className="relative w-2 h-2 rounded-full bg-[#0aa88a]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
                    We&apos;re online
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#01463A]">
                  Replies within the hour
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Mon–Fri · 8am–6pm PT
                </p>
              </div>
            </div>
          </div>

          {/* Right — form in a box */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-2xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#01463A]">Message received.</h3>
                <p className="mt-2 text-sm text-gray-500 max-w-sm">
                  We&apos;ll be in touch within one business day, usually sooner.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field
                  label="Name"
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                  required
                />
                <Field
                  type="email"
                  label="Work email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  required
                />
                <Field
                  label="Company"
                  value={formData.company}
                  onChange={(v) => setFormData({ ...formData, company: v })}
                />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your workflow or timelines…"
                    className="w-full text-sm text-[#01463A] placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#01463A] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors"
                >
                  Send message
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="underline hover:text-[#058B74]">Terms</a>{" "}
                  and{" "}
                  <a href="/privacy" className="underline hover:text-[#058B74]">Privacy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/banner_cta.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, #01463A 30%, transparent 100%)",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Prefer to skip the form?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Start screening<br className="hidden md:block" /> in minutes.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Create an account and run your first check today. No contracts,
                no setup fees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Create account
                </a>
                <a
                  href="mailto:sales@atlasscreening.com"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Email sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
        {label}
        {required && <span className="text-[#058B74] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full text-sm text-[#01463A] placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all"
      />
    </div>
  );
}

function MinimalRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>
      <p className="mt-1.5 text-base font-medium text-[#01463A]">{value}</p>
    </div>
  );
}
