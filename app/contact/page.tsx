"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Fake submit — no backend.
      setSubmitted(true);
    }
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2";

  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />

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

      {/* Primary — form (left) + supporting details (right) */}
      <section className="bg-white py-20 px-6">
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
                    Thanks for reaching out. We&apos;ll be in touch within one business
                    day, usually sooner.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                      className={`w-full text-sm text-[#01463A] placeholder-gray-400 bg-gray-50 border rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`w-full min-h-[44px] bg-[#01463A] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors ${focusRing}`}
                  >
                    Send message
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

          {/* Right — supporting copy + support hours */}
          <div className="lg:pl-8 lg:pt-4">
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

            <Reveal as="div" variant="fade" delay={300} className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
                Support hours
              </p>
              <p className="mt-2 text-sm font-semibold text-[#01463A]">
                Mon–Fri · 8am–6pm PT
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Replies within the hour during business hours.
              </p>
            </Reveal>
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
            <Reveal
              as="a"
              href="mailto:contact@atlasscreening.com"
              variant="up"
              delay={0}
              className={`group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 ${focusRing}`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              href="mailto:support@atlasscreening.com"
              variant="up"
              delay={100}
              className={`group text-left relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 ${focusRing}`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              href="/dispute-resolution"
              variant="up"
              delay={200}
              className={`group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 ${focusRing}`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

      {/* Bottom CTA */}
      <CTASection
        eyebrow="Prefer to skip the form?"
        title={
          <>
            Start screening<br className="hidden lg:block" /> in minutes.
          </>
        }
        description="Create an account and run your first check today. No contracts, no setup fees."
        primary={{ label: "Create account", href: "/signup" }}
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
        className={`w-full text-sm text-[#01463A] placeholder-gray-400 bg-gray-50 border rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all ${
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
