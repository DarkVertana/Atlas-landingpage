import Link from "next/link";

type Stat = { value: string; label: string };

const ARROW = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Stats({ stats }: { stats: Stat[] }) {
  return (
    <dl className="mt-8 flex flex-wrap gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-2xl font-bold text-[#01463A]">{stat.value}</dd>
          <div className="mt-1 text-xs text-gray-600">{stat.label}</div>
        </div>
      ))}
    </dl>
  );
}

function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#01463A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#01463A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
    >
      {children}
      {ARROW}
    </Link>
  );
}

/**
 * Three content sections describing global coverage, security, and
 * integrations. Previously these were decorative WebGL scenes (globe / shield /
 * network) at 300vh that carried no information and pulled a heavy
 * three / @react-three bundle. The real content was always the text overlays,
 * so the 3D layer has been removed in favor of clean, accessible sections.
 *
 * NOTE: Stats below are intentionally conservative. Replace any figure with a
 * verified number before publishing (integration count, turnaround, coverage).
 */
export default function ThreeDSections() {
  return (
    <div className="bg-white">
      {/* Global coverage */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="md:w-1/2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#058B74]">
            Global Screening
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#01463A] md:text-5xl">
            Screening <span className="text-[#058B74]">without borders</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
            Run background checks across international jurisdictions. Our platform
            connects to global databases, court systems, and verification
            networks to deliver fast, compliant results wherever your candidates
            are based.
          </p>
          <Stats
            stats={[
              { value: "Global", label: "Multi-country coverage" },
              { value: "Multiple", label: "Verified data sources" },
              { value: "Fast", label: "Turnaround where available" },
            ]}
          />
          <Cta href="/services">Explore global coverage</Cta>
        </div>
      </section>

      {/* Security & compliance */}
      <section className="border-y border-gray-100 bg-[#01463A]/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="md:ml-auto md:w-1/2 md:text-right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#058B74]">
              Security &amp; Compliance
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#01463A] md:text-5xl">
              Every report,{" "}
              <span className="text-[#058B74]">handled with care</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-600 md:ml-auto">
              Candidate data is protected at every step. Reports follow FCRA
              requirements and EEOC adjudication guidance, with encryption applied
              end to end so sensitive information stays secure.
            </p>
            <dl className="mt-8 flex flex-wrap gap-8 md:justify-end">
              {[
                { value: "FCRA", label: "Compliant workflow" },
                { value: "EEOC", label: "Adjudication guidance" },
                { value: "AES-256", label: "Encryption" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-[#01463A]">
                    {stat.value}
                  </dd>
                  <div className="mt-1 text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </dl>
            <div className="md:flex md:justify-end">
              <Cta href="/about">Learn about security</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* API & integrations */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="md:w-1/2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#058B74]">
            API &amp; Integrations
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#01463A] md:text-5xl">
            Fits the tools{" "}
            <span className="text-[#058B74]">your team already uses</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
            Connect Atlas Screening to your ATS, HRIS, or custom platform. Our
            RESTful API and pre-built integrations let you trigger checks, receive
            webhooks, and automate your hiring pipeline.
          </p>
          <Stats
            stats={[
              { value: "REST", label: "API access" },
              { value: "Webhooks", label: "Real-time updates" },
              { value: "Pre-built", label: "Integrations available" },
            ]}
          />
          <Cta href="/services">View API docs</Cta>
        </div>
      </section>
    </div>
  );
}
