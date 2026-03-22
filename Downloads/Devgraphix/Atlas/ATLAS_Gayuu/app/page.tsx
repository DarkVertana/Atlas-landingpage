import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      {/* Page content */}
      <div className="relative">

      {/* Who We Are Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">

          {/* Intro — text + image */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                Your Trusted Partner in Background Screening
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Atlas Screening provides compliant, accurate background screening solutions for employers, property managers, and organizations. We focus on secure reporting, transparency, and strict adherence to FCRA and applicable state laws.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#058B74]/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#01463A]">Trusted Screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#058B74]/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#01463A]">Maximum Automation</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-colors"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="text-gray-300 text-sm">Image placeholder</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#058B74]/10 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#01463A]/10 rounded-xl -z-10" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "FCRA Compliant",
                desc: "Every report follows strict Fair Credit Reporting Act guidelines and state-specific regulations.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#058B74" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "24hr Turnaround",
                desc: "Most screening results are delivered within 24 hours through our automated platform.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#058B74" strokeWidth="1.5" />
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Secure & Encrypted",
                desc: "SOC 2 certified infrastructure with end-to-end encryption for all candidate data.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01l-3-3" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "99.8% Accuracy",
                desc: "Multi-source verification across national and local databases ensures reliable results.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-100 hover:border-[#058B74]/20 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#058B74]/10 flex items-center justify-center mb-4 group-hover:bg-[#058B74]/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-[#01463A] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-16 rounded-2xl bg-[#01463A] px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "50+", label: "Database Sources" },
                { value: "500+", label: "Businesses Served" },
                { value: "1M+", label: "Reports Delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
              Compliance & Certifications
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "FCRA", sub: "Compliant" },
                { name: "SOC 2", sub: "Type II" },
                { name: "EEOC", sub: "Guidelines" },
                { name: "PBSA", sub: "Accredited" },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-gray-200 hover:border-[#058B74]/30 hover:shadow-sm transition-all"
                >
                  <span className="text-lg font-bold text-[#01463A]">{badge.name}</span>
                  <span className="text-[11px] text-gray-400 mt-0.5">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01463A]">Our Services</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              Comprehensive screening solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Criminal Background Checks", desc: "County, state, and federal criminal record searches to ensure workplace safety." },
              { title: "Employment Verification", desc: "Confirm work history, job titles, dates of employment, and reasons for leaving." },
              { title: "Education Verification", desc: "Validate degrees, diplomas, certifications, and attendance dates." },
              { title: "Drug Testing", desc: "Pre-employment and random drug screening with fast lab turnaround." },
              { title: "Reference Checks", desc: "Professional reference interviews to assess character and work ethic." },
              { title: "Identity Verification", desc: "SSN trace, address history, and identity confirmation services." },
            ].map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-[#058B74]/30 transition-all">
                <h3 className="text-lg font-semibold text-[#01463A] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01463A]">How It Works</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              Get results in three simple steps. No hassle, no delays.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Submit a Request", desc: "Enter your candidate's information through our secure online portal. It takes less than 2 minutes." },
              { step: "02", title: "We Screen", desc: "Our team runs comprehensive checks across national and local databases with full FCRA compliance." },
              { step: "03", title: "Get Results", desc: "Receive a clear, detailed report delivered to your dashboard — typically within 24 hours." },
            ].map((item) => (
              <div key={item.step}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#058B74]/10 text-[#058B74] text-lg font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#01463A] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#01463A]">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "24hr", label: "Avg. Turnaround" },
            { value: "99.8%", label: "Accuracy Rate" },
            { value: "10K+", label: "Screenings Done" },
            { value: "500+", label: "Companies Trust Us" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
      </div>
    </div>
  );
}
