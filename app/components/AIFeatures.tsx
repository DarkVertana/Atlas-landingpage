const features = [
  {
    title: "AI Risk Scoring",
    desc: "Decision-ready risk scores calibrated against FCRA-compliant signals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence",
    desc: "Automated ID verification with tamper and forgery detection.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    title: "Anomaly Detection",
    desc: "ML flags identity and employment inconsistencies before review.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
  {
    title: "Continuous Monitoring",
    desc: "Post-hire alerts the moment a new record or sanction appears.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
];

export default function AIFeatures() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — details */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              AI built into every background check.
            </h2>
            <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-lg">
              Machine learning runs quietly underneath every report — surfacing risk,
              verifying documents, and catching anomalies so your team can make confident
              decisions faster.
            </p>

            <ul className="mt-8 space-y-8">
              {features.map((f) => (
                <li key={f.title} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 text-[#058B74]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#01463A]">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#01463A] to-[#058B74] aspect-[4/5] shadow-xl shadow-[#058B74]/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/Ai-section.webp"
                alt="AI-powered screening"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/40 via-transparent to-transparent pointer-events-none" />

              {/* Trust badge inside image */}
              <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full pl-2 pr-4 py-1.5 shadow-lg shadow-black/10">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#058B74]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                  Trusted &amp; Verified
                </span>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute bottom-8 -right-8 z-20 bg-white rounded-2xl shadow-xl shadow-[#01463A]/15 border border-gray-100 px-4 py-3 w-[180px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#f5a623]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.5 6 .9-4.3 4.2 1 6-5.3-2.9-5.4 2.9 1-6L1.4 7.9l6-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base font-bold text-[#01463A]">4.9</span>
              </div>
              <p className="mt-1.5 text-xs text-gray-500">
                Based on <span className="font-semibold text-[#01463A]">200+ reviews</span>
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-[#01463A] font-semibold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-11" />
                </svg>
                Verified reviews
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-10 right-8 w-24 h-24 rounded-2xl bg-[#058B74]/15 -z-10" />
            <div className="absolute top-12 -right-8 w-28 h-28 rounded-3xl bg-[#01463A]/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
