type Service = {
  slug: string;
  name: string;
  desc: string;
  href: string;
  image: string;
  gradient: string;
  bullets: string[];
  category: "core" | "add-on";
};

const services: Service[] = [
  {
    slug: "criminal-background-checks",
    name: "Criminal background checks",
    desc: "County, state, and federal criminal record searches in one compliant report — with Basic, Standard, and Premium tiers.",
    href: "/services/criminal-background-checks",
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#01463A] to-[#058B74]",
    bullets: ["National database", "County + federal", "Sex offender registry"],
    category: "core",
  },
  {
    slug: "ssn-trace",
    name: "SSN trace & address history",
    desc: "The foundation check that anchors every screening — identity validation and a full residential history.",
    href: "/services/ssn-trace",
    image: "/assets/images/SSN-trace-%26-address-history.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
    bullets: ["Identity validation", "7-year address history", "Alias discovery"],
    category: "core",
  },
  {
    slug: "employment-verification",
    name: "Employment verification",
    desc: "Confirms titles, dates of employment, and reason for separation with prior employers.",
    href: "/services/employment-verification",
    image: "/assets/images/Employment-verification.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
    bullets: ["Titles & dates", "Separation reason", "Contact-by-contact proof"],
    category: "core",
  },
  {
    slug: "mvr",
    name: "Motor vehicle records",
    desc: "State-by-state driving history for fleet, delivery, gig, and any role behind the wheel.",
    href: "/services/mvr",
    image: "/assets/images/Motor-vehicle-records.webp",
    gradient: "from-[#058B74] to-[#01463A]",
    bullets: ["State-by-state", "Violation history", "Continuous monitoring"],
    category: "core",
  },
  {
    slug: "tenant-screening",
    name: "Tenant screening",
    desc: "Criminal, credit, and eviction history bundled for property managers and landlords.",
    href: "/services/tenant-screening",
    image: "/assets/images/Tenant-screening.webp",
    gradient: "from-[#0aa88a] to-[#01463A]",
    bullets: ["Criminal + credit", "Eviction history", "Property-friendly flow"],
    category: "add-on",
  },
  {
    slug: "credit-report",
    name: "Credit report",
    desc: "Used for financial, fiduciary, and executive roles where permissible purpose applies.",
    href: "/services/credit-report",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#058B74]",
    bullets: ["Permissible-purpose", "Executive screening", "Financial roles"],
    category: "add-on",
  },
  {
    slug: "global-watchlist",
    name: "Global watchlist",
    desc: "OFAC, terror lists, sanctions, and PEP screening for international or high-risk roles.",
    href: "/services/global-watchlist",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
    bullets: ["OFAC + sanctions", "PEP screening", "International coverage"],
    category: "add-on",
  },
  {
    slug: "social-media-screening",
    name: "Social media inquiry",
    desc: "FCRA-compliant review of public profiles — no protected-class data, no private content.",
    href: "/services/social-media-screening",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
    bullets: ["Public profiles only", "FCRA-compliant review", "Redacted report"],
    category: "add-on",
  },
];

const categoryLabels: Record<Service["category"], string> = {
  core: "Core check",
  "add-on": "Add-on",
};

const faqs = [
  {
    q: "Which service should I start with?",
    a: "Most teams begin with Criminal background checks and SSN trace — these anchor identity and core criminal risk. Use our package recommender if you'd like a tailored starting point.",
  },
  {
    q: "Can I mix and match services?",
    a: "Yes. Every tier pairs with any combination of add-ons. You'll only be billed per add-on when an applicant completes the check.",
  },
  {
    q: "Are all services FCRA compliant?",
    a: "Yes. Every Atlas service — including social media inquiry — follows FCRA and EEOC requirements. Consent, disclosures, and adverse action are built in.",
  },
  {
    q: "How fast are results?",
    a: "Identity, national criminal, and MVR typically return in minutes. Employment and education verifications take 1–3 business days depending on source responsiveness.",
  },
];

export default function ServicesPage() {
  const core = services.filter((s) => s.category === "core");
  const addOns = services.filter((s) => s.category === "add-on");

  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Every background check, one platform.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            From identity and criminal records to tenant screening and watchlists —
            every Atlas service is FCRA-compliant, fast, and built to work together.
          </p>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-2">
                Core checks
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                The foundation of every report.
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md md:text-right">
              These checks anchor identity and core risk for most hiring and
              leasing decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {core.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-2">
                Add-ons
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                Layer on what you need.
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md md:text-right">
              Stack on top of any tier. Each add-on is priced and billed per
              completed check.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {addOns.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Built-in benefits */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Everything ships with the essentials.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Compliance, security, and applicant tooling that make Atlas Atlas —
              included in every service by default.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "FCRA workflow",
                desc: "Consent, adverse action, and audit logging in every report.",
              },
              {
                title: "Encrypted storage",
                desc: "AES-256 at rest, TLS 1.2+ in transit, tokenized links.",
              },
              {
                title: "Dispute resolution",
                desc: "Self-serve dispute flow with a one-business-day SLA.",
              },
              {
                title: "Dashboard & API",
                desc: "Invite applicants or integrate via REST API for scale.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#058B74]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                  <h3 className="text-sm font-semibold text-[#01463A]">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
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
              </details>
            ))}
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
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Start<br className="hidden md:block" /> Screening?
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Sign up today and get enterprise-grade background screening for
                your organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ service: s }: { service: Service }) {
  return (
    <a
      href={s.href}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#058B74]/50 hover:shadow-xl hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
    >
      <div className={`relative md:w-60 md:flex-shrink-0 h-48 md:h-auto overflow-hidden bg-gradient-to-br ${s.gradient}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.image}
          alt={s.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#058B74]">
          {categoryLabels[s.category]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#01463A] group-hover:text-[#058B74] transition-colors">
          {s.name}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {s.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-[12px] text-[#01463A]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M5 12l5 5 9-11" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#058B74] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Learn more
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}
