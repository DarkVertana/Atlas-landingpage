import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import CTASection from "../components/CTASection";
import { services, serviceGroups, type Service } from "../lib/services";
import { startScreeningHref } from "../lib/appUrl";

const faqs = [
  {
    q: "Which service should I start with?",
    a: "Most teams begin with the Standard criminal tier (which bundles SSN trace, national criminal, sex offender registry, and county search) plus employment verification. Use our cost calculator if you'd like a tailored recommendation.",
  },
  {
    q: "Can I mix and match services?",
    a: "Yes. Every core tier pairs with any combination of add-ons. You only pay per add-on when an applicant completes the check — no subscription, no commitment.",
  },
  {
    q: "Are all services FCRA compliant?",
    a: "Yes. Every Atlas service — including social media inquiry — enforces FCRA consent, disclosures, and adverse action workflows by default. Non-compliant use is not possible through the platform.",
  },
  {
    q: "How fast are results?",
    a: "SSN trace, national criminal, MVR, and watchlist checks typically return database results in minutes. County criminal searches usually clear the same business day. Employment and education verifications take 1–3 business days depending on source responsiveness.",
  },
  {
    q: "What does 'per check' pricing include?",
    a: "The listed price covers a single applicant running a single check. Bundle pricing drops the effective per-check cost and is available at any volume — talk to sales for a tailored quote.",
  },
];

function primaryCtaFor(s: Service): { label: string; href: string; external: boolean } {
  if (s.start) {
    return { label: "Start screening", href: startScreeningHref(s.start), external: true };
  }
  // Subscription / sales-only service.
  return { label: "Talk to sales", href: `/contact?service=${s.slug}`, external: false };
}

export default function ServicesPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative">
          <SectionHeader
            align="center"
            tone="light"
            as="h1"
            eyebrow="Services"
            title="Every background check, fully detailed."
            intro="From identity and criminal records to property-management tenant screening, credit, and global watchlists — every Atlas service is FCRA-compliant, transparently priced, and built to work together. Each has its own dedicated page below."
          />
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-3 overflow-x-auto">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#01463A] whitespace-nowrap">
            <span className="text-gray-600 pr-2">Jump to</span>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center min-h-11 px-3 py-2.5 rounded-full border border-gray-200 hover:border-[#058B74] hover:text-[#058B74] hover:bg-[#058B74]/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service sections, grouped */}
      <section className="bg-white">
        {serviceGroups.map((group) => {
          const groupServices = services.filter((s) => s.group === group.id);
          if (groupServices.length === 0) return null;
          return (
            <div key={group.id}>
              {/* Group band */}
              <div className="mx-auto max-w-6xl px-5 sm:px-6 pt-14 sm:pt-20">
                <Reveal>
                  <div className="flex flex-col gap-1 border-b border-gray-100 pb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
                      {group.label}
                    </p>
                    <p className="text-sm text-gray-500">{group.blurb}</p>
                  </div>
                </Reveal>
              </div>

              {groupServices.map((s, i) => {
                const reversed = i % 2 === 1;
                const cta = primaryCtaFor(s);
                return (
                  <article
                    key={s.slug}
                    id={s.slug}
                    className={`scroll-mt-32 px-5 py-14 sm:px-6 sm:py-20 ${
                      reversed ? "bg-gradient-to-b from-white to-gray-50" : "bg-white"
                    }`}
                  >
                    <div className="mx-auto max-w-6xl">
                      <div
                        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                          reversed ? "lg:[&>div:first-child]:order-2" : ""
                        }`}
                      >
                        {/* Copy column */}
                        <Reveal variant={reversed ? "right" : "left"}>
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            {(() => {
                              const isAddOn = s.category === "Add-on";
                              const badge = isAddOn
                                ? "text-[#B26A00] bg-[#F5A524]/12 ring-[#F5A524]/25"
                                : "text-[#058B74] bg-[#058B74]/10 ring-[#058B74]/15";
                              return (
                                <span
                                  className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest ring-1 ring-inset px-2.5 py-1 rounded-full ${badge}`}
                                >
                                  <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ backgroundColor: isAddOn ? "#F5A524" : "#058B74" }}
                                  />
                                  {s.category}
                                </span>
                              );
                            })()}
                            <span className="text-[11px] text-gray-600">{s.eyebrow}</span>
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                            {s.name}
                          </h2>
                          <p className="mt-3 text-base md:text-lg text-[#058B74] font-medium leading-snug">
                            {s.tagline}
                          </p>
                          <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-lg">
                            {s.intro}
                          </p>

                          {/* Meta strip */}
                          <dl className="mt-7 grid grid-cols-2 gap-4 max-w-md">
                            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                                Turnaround
                              </dt>
                              <dd className="mt-1 text-sm font-semibold text-[#01463A]">
                                {s.turnaround}
                              </dd>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                                {s.priceNote ? "Pricing" : "Starts at"}
                              </dt>
                              {s.priceNote ? (
                                <dd className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#058B74] bg-[#058B74]/10 ring-1 ring-inset ring-[#058B74]/15 px-2.5 py-1 rounded-full">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12l5 5 9-11" />
                                  </svg>
                                  {s.priceFrom}
                                </dd>
                              ) : (
                                <dd className="mt-1 text-sm font-semibold text-[#01463A]">
                                  {s.priceFrom}
                                </dd>
                              )}
                            </div>
                          </dl>

                          {/* Feature bullets */}
                          <div className="mt-8">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74] mb-3">
                              What&apos;s included
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                              {s.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm text-[#01463A]">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#058B74"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="flex-shrink-0 mt-0.5"
                                  >
                                    <path d="M5 12l5 5 9-11" />
                                  </svg>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use cases */}
                          <div className="mt-8">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74] mb-3">
                              Best for
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {s.useCases.map((u) => (
                                <span
                                  key={u}
                                  className="inline-flex items-center text-xs text-[#01463A] bg-white border border-gray-200 rounded-full px-3 py-1.5"
                                >
                                  {u}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTAs */}
                          <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                              href={cta.href}
                              {...(cta.external ? { target: "_blank", rel: "noopener" } : {})}
                              className="inline-flex items-center gap-2 bg-[#01463A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#058B74] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                            >
                              {cta.label}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 5l7 7-7 7" />
                              </svg>
                            </Link>
                            <Link
                              href={s.detailHref}
                              className="inline-flex items-center gap-2 border border-gray-200 text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[#058B74] hover:text-[#058B74] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                            >
                              Full details
                            </Link>
                          </div>
                        </Reveal>

                        {/* Visual column — image + highlight cards */}
                        <div className="lg:sticky lg:top-32">
                          <Reveal variant={reversed ? "left" : "right"}>
                            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#01463A] aspect-[16/10]">
                              <Image
                                src={s.image}
                                alt={`${s.name} — Atlas Screening`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/40 to-transparent pointer-events-none" />
                            </div>
                          </Reveal>

                          <Reveal
                            as="p"
                            variant={reversed ? "left" : "right"}
                            className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74] mt-6 mb-3"
                          >
                            Why it stands up to audit
                          </Reveal>
                          {/* Included cards */}
                          <div className="grid sm:grid-cols-3 gap-3">
                            {s.included.map((b, bi) => (
                              <Reveal key={b.title} delay={bi * 80}>
                                <div className="h-full rounded-3xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-md hover:shadow-[#058B74]/5 transition-all">
                                  <div className="w-9 h-9 rounded-lg bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10">
                                    {b.icon}
                                  </div>
                                  <h3 className="mt-3 text-sm font-semibold text-[#01463A]">
                                    {b.title}
                                  </h3>
                                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                    {b.desc}
                                  </p>
                                </div>
                              </Reveal>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          );
        })}
      </section>

      {/* Built-in benefits */}
      <section className="bg-white py-14 sm:py-20 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            className="mb-14"
            eyebrow="Shipped with every service"
            title="Compliance, security, and applicant tooling — included"
            intro="Every Atlas service inherits the same platform defaults. You never bolt on compliance or security as an afterthought."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "FCRA workflow",
                desc: "Timestamped consent, standalone disclosures, two-step adverse action — automated.",
              },
              {
                title: "Encrypted storage",
                desc: "Encrypted data transmission and storage with tokenized applicant links.",
              },
              {
                title: "Dispute resolution",
                desc: "Applicant-friendly self-serve dispute workflow with a one-business-day SLA.",
              },
              {
                title: "Dashboard & API",
                desc: "Invite applicants from the dashboard or integrate via REST API for scale.",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-md hover:shadow-[#058B74]/5 transition-all">
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    <h3 className="text-sm font-semibold text-[#01463A]">{b.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            className="mb-14"
            eyebrow="FAQ"
            title="Service questions"
            intro="What teams ask most before running their first check or adding an add-on to an existing package."
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal
                as="details"
                key={faq.q}
                delay={i * 80}
                className="group block rounded-3xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
                  <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        eyebrow="Get started today"
        title={
          <>
            Ready to start<br className="hidden lg:block" /> screening?
          </>
        }
        description="Sign up today and run any Atlas service for your organization — with transparent pricing, no contracts, and no setup fees."
        primary={{ label: "Start screening", href: startScreeningHref() }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </main>
  );
}
