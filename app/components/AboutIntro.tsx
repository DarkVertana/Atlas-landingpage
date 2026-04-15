import Reveal from "./Reveal";

export default function AboutIntro() {
  const services = [
    {
      label: "Criminal Background Checks",
      desc: "Basic, standard, or premium tiers across county, state, and federal databases.",
      href: "/services/criminal-background-checks",
      image: "/assets/images/Criminal-background-checks.webp",
      gradient: "from-[#01463A] to-[#058B74]",
    },
    {
      label: "SSN Trace & Address History",
      desc: "Establish a verified baseline identity for every report.",
      href: "/services/ssn-trace",
      image: "/assets/images/SSN-trace-%26-address-history.webp",
      gradient: "from-[#058B74] to-[#0aa88a]",
    },
    {
      label: "Motor Vehicle Records",
      desc: "Detailed driving histories for transportation and fleet personnel.",
      href: "/services/mvr",
      image: "/assets/images/Motor-vehicle-records.webp",
      gradient: "from-[#01463A] to-[#0aa88a]",
    },
    {
      label: "Employment Verification",
      desc: "Validate past titles, dates, and workplace history with previous employers.",
      href: "/services/employment-verification",
      image: "/assets/images/Employment-verification.webp",
      gradient: "from-[#058B74] to-[#01463A]",
    },
    {
      label: "Transparent Add-On Services",
      desc: "Global Watchlist, Tenant Screening, and Credit Reports at a flat $39.99.",
      href: "/services/tenant-screening",
      image: "/assets/images/Tenant-screening.webp",
      gradient: "from-[#0aa88a] to-[#01463A]",
    },
  ];

  const themedCursor =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 2l0 16 4.2-3.8 2.6 6 2.7-1.2-2.6-6 5.5-.5z' fill='%23058B74' stroke='white' stroke-width='1.2' stroke-linejoin='round'/></svg>\") 2 2, auto";

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6" style={{ cursor: themedCursor }}>
      <div className="mx-auto max-w-6xl text-center">
        <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
          A unified platform for comprehensive screening.
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed"
        >
          Consolidate your entire verification process. Whether you are scaling a
          corporate workforce or managing real estate portfolios, our workflow delivers
          exactly what you need in one centralized dashboard.
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {services.map((service, i) => {
            const placement =
              i < 3
                ? "lg:col-span-2"
                : i === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2";
            return (
              <Reveal key={service.label} delay={i * 80} className={placement}>
                <a
                  href={service.href}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#058B74]/50 hover:shadow-xl hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 text-left block h-full"
                >
                <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#01463A] group-hover:text-[#058B74] transition-colors">
                    {service.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500">{service.desc}</p>
                </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
