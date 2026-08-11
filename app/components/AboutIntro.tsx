"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./ui/SectionHeader";

type Service = {
  label: string;
  desc: string;
  href: string;
  image: string;
};

const services: Service[] = [
  {
    label: "Criminal Background Checks",
    desc: "Basic, standard, or premium tiers across county, state, and federal databases.",
    href: "/services/criminal-background-checks",
    image: "/assets/services-hero/criminal.jpg",
  },
  {
    label: "SSN Trace & Address History",
    desc: "Establish a verified baseline identity for every report.",
    href: "/services/ssn-trace",
    image: "/assets/services-hero/ssn-trace.jpg",
  },
  {
    label: "Motor Vehicle Records",
    desc: "Detailed driving histories for transportation and fleet personnel.",
    href: "/services/mvr",
    image: "/assets/services-hero/mvr.jpg",
  },
  {
    label: "Employment Verification",
    desc: "Validate past titles, dates, and workplace history with previous employers.",
    href: "/services/employment-verification",
    image: "/assets/services-hero/employment.jpg",
  },
  {
    label: "Transparent Add-On Services",
    desc: "Global Watchlist, Tenant Screening, and Credit Reports at a flat $39.99.",
    href: "/services/tenant-screening",
    image: "/assets/services-hero/add-ons.jpg",
  },
];

const themedCursor =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 2l0 16 4.2-3.8 2.6 6 2.7-1.2-2.6-6 5.5-.5z' fill='%23058B74' stroke='white' stroke-width='1.2' stroke-linejoin='round'/></svg>\") 2 2, auto";

export default function AboutIntro() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative z-0 bg-white px-4 pb-24 sm:px-6 sm:pb-32 pt-24 sm:pt-36 lg:pt-[370px]"
      style={{ cursor: themedCursor }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="center"
          eyebrow="Our Services"
          title="A unified platform for comprehensive screening."
          intro="Every verification you need for hiring or property management, in one dashboard."
        />

        {/* Expanding panels — desktop */}
        <Reveal
          delay={200}
          className="mt-12 hidden lg:flex gap-3 h-[420px]"
        >
          {services.map((service, i) => {
            const isActive = i === active;
            return (
              <a
                key={service.label}
                href={service.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
                  isActive
                    ? "flex-[5] border-transparent shadow-2xl shadow-black/20"
                    : "flex-[1] border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Photography over a neutral charcoal base */}
                <div className="absolute inset-0 bg-[#12100f]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.label}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      isActive
                        ? "scale-100 opacity-100 saturate-100"
                        : "scale-105 opacity-70 saturate-[0.6]"
                    }`}
                  />
                  {/* Neutral legibility scrim — dark, not green */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                        : "bg-gradient-to-t from-black/80 via-black/45 to-black/20"
                    }`}
                  />
                  {/* Subtle emerald accent, only on the active panel */}
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#058B74]/25 to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Collapsed vertical label */}
                <span
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white/80 transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ writingMode: "vertical-rl", transform: "translateX(-50%) rotate(180deg)" }}
                >
                  {service.label}
                </span>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {service.label}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                    {service.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#01463A]">
                    Explore service
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </Reveal>

        {/* Stacked cards — mobile / tablet */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {services.map((service, i) => (
            <Reveal key={service.label} delay={i * 80}>
              <a
                href={service.href}
                className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-3xl border border-gray-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                <div className="absolute inset-0 bg-[#12100f]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                </div>
                <div className="relative p-6">
                  <h3 className="text-lg font-bold text-white">{service.label}</h3>
                  <p className="mt-1.5 text-sm text-white/80">{service.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
