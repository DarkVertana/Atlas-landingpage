"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";

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
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4"
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
            className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Whether you need a custom enterprise screening package or require technical
            support for an ongoing order, our team is ready to assist.
          </Reveal>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5">
            <Reveal
              as="a"
              href="mailto:sales@atlasscreening.com"
              variant="up"
              delay={0}
              className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16" />
                  <path d="M3 21h18" />
                  <path d="M9 9h1M9 13h1M14 9h1M14 13h1M9 17h6" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Enterprise sales inquiries
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  Request a platform demo
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Building a high-volume screening program requires strategic planning.
                  Connect with our sales team to discuss custom-built bundles, API
                  integrations, and volume pricing tailored to your organization.
                </p>
              </div>
            </Reveal>

            <Reveal
              as="a"
              href="/support"
              variant="up"
              delay={100}
              className="group text-left relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Employer support
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  Open a support ticket
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Existing clients can access immediate assistance for dashboard
                  navigation, billing questions, or specific screening status updates.
                </p>
              </div>
            </Reveal>

            <Reveal
              as="a"
              href="/disputes"
              variant="up"
              delay={200}
              className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                  Applicant dispute resolution
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#01463A]">
                  Initiate the dispute process
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  We maintain strict adherence to all Fair Credit Reporting Act
                  guidelines. If you need to challenge the accuracy of a completed
                  report, our compliance team will investigate promptly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Split — details (left) + form (right) */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — minimal */}
          <div className="lg:pr-8 lg:pt-4">
            <Reveal as="p" variant="fade" className="text-xs font-semibold tracking-[0.24em] uppercase text-[#058B74] mb-4">
              Say hello
            </Reveal>
            <Reveal as="h2" variant="left" delay={100} className="text-3xl md:text-4xl font-bold text-[#01463A] leading-[1.1]">
              Humans on <span className="text-[#058B74]">standby</span>.
            </Reveal>
            <Reveal as="p" variant="fade" delay={200} className="mt-5 text-sm text-gray-500 leading-relaxed max-w-md">
              No form letters, no ticket queues. Share a few details and the right
              person on our team will pick it up — usually within the hour.
            </Reveal>

            <Reveal as="div" variant="right" delay={300} className="relative mt-10">
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
            </Reveal>
          </div>

          {/* Right — form in a box */}
          <Reveal as="div" variant="left" delay={150} className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
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
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <Reveal as="div" variant="scale" delay={100} className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg">
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
              <Reveal as="p" variant="fade" className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Prefer to skip the form?
              </Reveal>
              <Reveal as="h2" variant="up" delay={100} className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Start screening<br className="hidden md:block" /> in minutes.
              </Reveal>
              <Reveal as="p" variant="fade" delay={200} className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Create an account and run your first check today. No contracts,
                no setup fees.
              </Reveal>
              <Reveal as="div" variant="fade" delay={300} className="mt-6 flex flex-wrap gap-3">
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
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

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
