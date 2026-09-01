"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { type StaggeredItem } from "./MobileStaggeredMenu";
import { startScreeningHref } from "../lib/appUrl";

// GSAP-powered mobile menu — only pulled in after the user opens the menu,
// so GSAP never ships in the initial JS for every page.
const MobileStaggeredMenu = dynamic(() => import("./MobileStaggeredMenu"), { ssr: false });

const startHref = startScreeningHref();

/* Flat top-level items for the mobile staggered menu */
const mobileMenuItems: StaggeredItem[] = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services" },
  { label: "How it works", link: "/how-it-works" },
  { label: "Pricing", link: "/pricing" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const servicesMenu = {
  sections: [
    {
      title: "By use case",
      items: [
        { label: "Employment screening", href: "/services", desc: "Background checks for hiring, at any volume" },
        { label: "Tenant screening", href: "/services/tenant-screening", desc: "Criminal, credit, and eviction history for landlords" },
        { label: "Continuous monitoring", href: "/services/continuous-checks", desc: "Ongoing checks on your existing workforce" },
        { label: "Applicants & disputes", href: "/dispute-resolution", desc: "Check a report status or file a dispute" },
      ],
    },
    {
      title: "Background checks",
      compact: true,
      items: [
        { label: "Criminal background checks", href: "/services/criminal-background-checks" },
        { label: "SSN trace & address history", href: "/services/ssn-trace" },
        { label: "Sex offender registry", href: "/services/sex-offender-registry" },
        { label: "Motor vehicle records", href: "/services/mvr" },
        { label: "Employment verification", href: "/services/employment-verification" },
        { label: "Global watchlist", href: "/services/global-watchlist" },
        { label: "Credit report", href: "/services/credit-report" },
        { label: "See all services", href: "/services" },
      ],
    },
    {
      title: "By industry",
      compact: true,
      items: [
        { label: "Staffing agencies", href: "/industries/staffing-agencies" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Transportation & logistics", href: "/industries/transportation-logistics" },
        { label: "Financial services", href: "/industries/financial-services" },
        { label: "Retail & hospitality", href: "/industries/retail-hospitality" },
        { label: "Education", href: "/industries/education" },
        { label: "Nonprofit & volunteer", href: "/industries/nonprofit-volunteer" },
      ],
    },
  ],
};

const howItWorksMenu = {
  sections: [
    {
      title: "Platform walkthrough",
      items: [
        { label: "How Atlas Screening works", href: "/how-it-works", desc: "Your 11-step workflow as an interactive visual", icon: "workflow" },
        { label: "Trust & compliance", href: "/trust", desc: "FCRA compliance, encrypted storage, audit logging", icon: "trust" },
      ],
    },
    {
      title: "Compliance & consumer rights",
      items: [
        { label: "Compliance & consumer protection", href: "/compliance", desc: "How we stay FCRA-compliant at every step", icon: "compliance" },
        { label: "Dispute resolution", href: "/dispute-resolution", desc: "Check a report status or file a dispute", icon: "dispute" },
        { label: "Client certification", href: "/client-certification", desc: "Permissible purpose and consent requirements", icon: "certification" },
      ],
    },
    {
      title: "Get started",
      items: [
        { label: "Pricing & packages", href: "/pricing", desc: "Criminal check tiers and every add-on priced", icon: "pricing" },
        { label: "Package recommender", href: "/resources/package-recommender", desc: "Find the right tier for your industry in 60 seconds", icon: "recommender" },
        { label: "Talk to sales", href: "/contact", desc: "Questions about onboarding or volume pricing", icon: "contact" },
      ],
    },
  ],
};

const resourcesMenu = {
  sections: [
    {
      title: "Blog & educational content",
      items: [
        { label: "Blog", href: "/blog", desc: "Compliance updates, hiring tips, industry insights", icon: "blog" },
        { label: "FAQ / Help center", href: "/faq", desc: "Client FAQ and applicant FAQ sections", icon: "faq" },
      ],
    },
    {
      title: "Interactive tools",
      items: [
        { label: "Screening cost calculator", href: "/resources/cost-calculator", desc: "Estimate your annual screening costs", icon: "calculator" },
        { label: "Package recommender", href: "/resources/package-recommender", desc: "Find the right package for your industry and roles", icon: "recommender" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About us", href: "/about", desc: "Our story, mission, and investigations DNA", icon: "about" },
        { label: "Contact", href: "/contact", desc: "Sales, support, and applicant dispute paths", icon: "contact" },
      ],
    },
  ],
};

const pricingMenu = {
  sections: [
    {
      title: "Package tiers + add-ons",
      items: [
        { label: "Pricing & packages", href: "/pricing", desc: "3 criminal check tiers + all add-ons priced", icon: "pricing" },
      ],
    },
    {
      title: "Transparency extensions",
      items: [
        { label: "What's included", href: "/pricing#whats-included", desc: "Detailed breakdown of every check in each tier", icon: "included" },
        { label: "Compare plans", href: "/pricing#comparison", desc: "Side-by-side: Basic vs Standard vs Premium", icon: "compare" },
      ],
    },
  ],
};

type MegaSection = {
  title: string;
  compact?: boolean;
  items: { label: string; href: string; desc?: string; icon?: string }[];
};
const megaMenus: Record<string, { sections: MegaSection[] }> = {
  Services: servicesMenu,
  "How it works": howItWorksMenu,
  Resources: resourcesMenu,
  Pricing: pricingMenu,
};

const navLinks = [
  { label: "Services", href: "#services", megaMenu: true },
  { label: "How it works", href: "#how-it-works", megaMenu: true },
  { label: "Resources", href: "#resources", megaMenu: true },
  { label: "Pricing", href: "#pricing", megaMenu: true },
  { label: "About", href: "/about" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Active-page detection for menu highlighting. Compare only the path portion
  // of each href (ignore ?query / #hash) against the current route.
  const hrefPath = (href: string) => href.split(/[?#]/)[0];
  const isItemActive = (href: string) => {
    const p = hrefPath(href);
    return p.length > 1 && pathname === p;
  };
  const isMenuActive = (label: string) => {
    const m = megaMenus[label];
    return m ? m.sections.some((s) => s.items.some((it) => isItemActive(it.href))) : false;
  };
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);
  // Latches true on first open so the menu (and GSAP) mount lazily, but stay
  // mounted afterwards so the close animation can play.
  const [menuMounted, setMenuMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => {
      const forced = document.body.classList.contains("force-header-solid");
      const threshold = isHome ? 10 : 80;
      setScrolled(solid || forced || window.scrollY > threshold);
    };
    // Coalesce scroll events into one check per frame so the header state
    // never recomputes more than once per paint on fast-scrolling devices.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        check();
      });
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [solid, isHome]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMenuEnter = (label: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const toggleMenu = (label: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  // Close any open mega-menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "bg-[#01463A] shadow-none"
            : scrolled
              ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-200/60"
              : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center -m-2 p-2">
            <Image
              src="/assets/atlas-logo.svg"
              alt="Atlas Screening"
              width={100}
              height={25}
              priority
              className={`w-[80px] md:w-[100px] h-auto transition-all duration-500 ease-in-out ${
                menuOpen || !scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const menu = link.megaMenu ? megaMenus[link.label] : null;
              const isOpen = activeMenu === link.label;
              const active = link.megaMenu ? isMenuActive(link.label) : isItemActive(link.href);

              return menu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(link.label)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    onClick={() => toggleMenu(link.label)}
                    onFocus={() => handleMenuEnter(link.label)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-current={active ? "page" : undefined}
                    className={`text-base font-medium transition-all duration-500 ease-in-out flex items-center gap-1 rounded-full px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      scrolled
                        ? `hover:text-[#01463A] focus-visible:ring-[#058B74] focus-visible:ring-offset-white ${active ? "bg-[#058B74]/12 text-[#01463A]" : "text-black"}`
                        : `hover:text-white focus-visible:ring-white focus-visible:ring-offset-transparent ${active ? "bg-white/15 text-white" : "text-white/80"}`
                    }`}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown — rendered via portal-style below */}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-base font-medium transition-all duration-500 ease-in-out rounded-full px-3.5 py-2 ${
                    scrolled
                      ? `hover:text-[#01463A] ${active ? "bg-[#058B74]/12 text-[#01463A]" : "text-black"}`
                      : `hover:text-white ${active ? "bg-white/15 text-white" : "text-white/80"}`
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Get Started — Desktop */}
          <a
            href={startHref}
            className={`hidden md:flex items-center text-sm font-semibold tracking-wide px-6 py-3 rounded-xl transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
              scrolled
                ? "bg-[#01463A] text-white hover:bg-[#01463A]/90 focus-visible:ring-offset-white"
                : "bg-white text-[#01463A] hover:bg-white/90 focus-visible:ring-offset-transparent"
            }`}
          >
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setMenuMounted(true);
              setMenuOpen((v) => !v);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`md:hidden relative z-50 -m-2 flex h-12 w-12 items-center justify-center transition-all duration-500 ease-in-out ${
              menuOpen ? "text-white" : scrolled ? "text-[#01463A]" : "text-white"
            }`}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 7H21M3 12H21M3 17H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mega Menu Dropdown Panel — single shared container */}
      {(() => {
        const activeMenuData = activeMenu ? megaMenus[activeMenu] : null;
        const isOpen = Boolean(activeMenuData);
        return (
          <div
            className={`fixed left-0 right-0 z-40 flex justify-center transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4 pointer-events-none"
            }`}
            style={{ top: "95px" }}
            onMouseEnter={() => activeMenu && handleMenuEnter(activeMenu)}
            onMouseLeave={handleMenuLeave}
          >
            <div
              className={`flex bg-white shadow-2xl shadow-black/10 ring-1 ring-gray-200/80 overflow-hidden w-[min(1060px,calc(100vw-2rem))] ${
                scrolled ? "rounded-b-2xl" : "rounded-2xl"
              }`}
            >
              {/* Link columns */}
              <div className="flex-1 p-7">
                {activeMenuData && (
                  <div
                    key={activeMenu}
                    className={`grid gap-x-8 gap-y-6 ${
                      activeMenuData.sections.length > 2 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {activeMenuData.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-600 mb-3">
                          {section.title}
                        </h4>
                        <div className="flex flex-col">
                          {section.items.map((item) => {
                            const itemActive = isItemActive(item.href);
                            return (
                            <a
                              key={item.href}
                              href={item.href}
                              aria-current={itemActive ? "page" : undefined}
                              className={`group/item relative -mx-2 flex items-start gap-1 rounded-lg px-2 transition-colors duration-150 ${
                                itemActive ? "bg-[#058B74]/[0.10]" : "hover:bg-[#058B74]/[0.06]"
                              } ${section.compact ? "py-1.5" : "py-2.5"}`}
                            >
                              <div className="min-w-0 flex-1">
                                <div className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors group-hover/item:text-[#058B74] ${itemActive ? "text-[#058B74]" : "text-[#01463A]"}`}>
                                  {item.label}
                                </div>
                                {item.desc && (
                                  <p className="mt-0.5 text-[12px] leading-snug text-gray-500">
                                    {item.desc}
                                  </p>
                                )}
                              </div>
                            </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Featured promo — makes the menu feel premium and useful */}
              <aside className="hidden w-[280px] shrink-0 flex-col justify-between bg-gradient-to-br from-[#01463A] to-[#022c24] p-7 lg:flex">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Not sure where to start?
                  </span>
                  <h5 className="mt-4 text-[17px] font-semibold leading-snug text-white">
                    Find the right screening package in 60 seconds
                  </h5>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
                    Answer a few questions and we&rsquo;ll recommend the right tier and add-ons for your industry.
                  </p>
                </div>
                <a
                  href="/resources/package-recommender"
                  className="group/cta mt-6 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0aa88a] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#0bbd99]"
                >
                  Try the recommender
                  <svg className="transition-transform duration-150 group-hover/cta:translate-x-0.5" width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2.5 6h6m0 0L6 3.5M8.5 6 6 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </aside>
            </div>
          </div>
        );
      })()}

      {/* Mobile Menu — staggered reveal (mobile only), mounted on first open */}
      {menuMounted && (
        <MobileStaggeredMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          items={mobileMenuItems}
          ctaHref={startHref}
          colors={["#0d8368", "#058B74", "#02543f"]}
          panelColor="#01463A"
          accentColor="#0aa88a"
        />
      )}
    </>
  );
}
