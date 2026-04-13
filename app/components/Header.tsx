"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

/* ─── Inline SVG Icons ─── */
const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d={d} />
  </svg>
);

const menuIcons: Record<string, ReactNode> = {
  criminal:    <I d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  ssn:         <I d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />,
  registry:    <I d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />,
  mvr:         <I d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21a.75.75 0 00.75-.75V11.25L18 2.25H5.25a2.25 2.25 0 00-2.25 2.25v9.75" />,
  employment:  <I d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />,
  social:      <I d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />,
  watchlist:   <I d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.919 17.919 0 01-8.716-2.247m0 0A9.015 9.015 0 013 9c0-.778.099-1.533.284-2.253" />,
  tenant:      <I d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M15.75 21H8.25m6.75-18.955V6.75m0-3.205h3.375c.621 0 1.125.504 1.125 1.125v3.026M6 21H2.25V10.5l5.25-4.5" />,
  credit:      <I d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />,
  workflow:    <I d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />,
  employers:   <I d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
  property:    <I d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />,
  applicant:   <I d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
  trust:       <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
  blog:        <I d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />,
  guide:       <I d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
  fcra:        <I d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />,
  customers:   <I d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
  faq:         <I d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />,
  calculator:  <I d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.502-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />,
  recommender: <I d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />,
  about:       <I d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  contact:     <I d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
  pricing:     <I d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  included:    <I d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
  compare:     <I d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
};

const servicesMenu = {
  sections: [
    {
      title: "Core background check services",
      items: [
        { label: "Criminal background checks", href: "/services/criminal-background-checks", desc: "Basic, Standard, and Premium tiers with comparison", icon: "criminal" },
        { label: "SSN trace & address history", href: "/services/ssn-trace", desc: "The foundation check that anchors every screening", icon: "ssn" },
        { label: "Sex offender registry", href: "/services/sex-offender-registry", desc: "National registry search for sensitive industries", icon: "registry" },
        { label: "Motor vehicle records", href: "/services/mvr", desc: "Driving history for transportation and fleet roles", icon: "mvr" },
        { label: "Employment verification", href: "/services/employment-verification", desc: "Confirm past employers, titles, and dates", icon: "employment" },
        { label: "Social media inquiry", href: "/services/social-media-screening", desc: "FCRA-compliant social media screening", icon: "social" },
      ],
    },
    {
      title: "Add-on services",
      items: [
        { label: "Global watchlist", href: "/services/global-watchlist", desc: "OFAC, terror lists, sanctions, and PEP screening", icon: "watchlist" },
        { label: "Tenant screening", href: "/services/tenant-screening", desc: "Background checks for property managers", icon: "tenant" },
        { label: "Credit report", href: "/services/credit-report", desc: "For financial, fiduciary, and executive roles", icon: "credit" },
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
      ],
    },
    {
      title: "Trust & compliance",
      items: [
        { label: "Trust & compliance", href: "/trust", desc: "FCRA compliance, encrypted storage, audit logging", icon: "trust" },
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
        { label: "FAQ / Help center", href: "/help", desc: "Client FAQ and applicant FAQ sections", icon: "faq" },
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
        { label: "What's included", href: "/pricing/whats-included", desc: "Detailed breakdown of every check in each tier", icon: "included" },
        { label: "Compare plans", href: "/pricing/compare", desc: "Side-by-side: Basic vs Standard vs Premium", icon: "compare" },
      ],
    },
  ],
};

const megaMenus: Record<string, { sections: { title: string; items: { label: string; href: string; desc: string; icon: string }[] }[] }> = {
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
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(solid || window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "bg-transparent backdrop-blur-none shadow-none"
            : scrolled
              ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-200/60"
              : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/assets/atlas-logo.svg"
              alt="Atlas Screening"
              width={100}
              height={25}
              priority
              className={`w-[80px] md:w-[100px] h-auto transition-all duration-500 ease-in-out ${
                menuOpen || !scrolled ? "brightness-0 invert hover:brightness-100 hover:invert-0" : ""
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const menu = link.megaMenu ? megaMenus[link.label] : null;
              const isOpen = activeMenu === link.label;

              return menu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(link.label)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={`text-base font-medium transition-all duration-500 ease-in-out flex items-center gap-1 ${
                      scrolled
                        ? "text-black hover:text-[#01463A]"
                        : "text-white/80 hover:text-white"
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
                  className={`text-base font-medium transition-all duration-500 ease-in-out ${
                    scrolled
                      ? "text-black hover:text-[#01463A]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Get Started — Desktop */}
          <a
            href="#contact"
            className={`hidden md:flex items-center text-sm font-semibold tracking-wide px-6 py-2.5 rounded-lg transition-all duration-500 ease-in-out ${
              scrolled
                ? "bg-[#01463A] text-white hover:bg-[#01463A]/90"
                : "bg-white text-[#01463A] hover:bg-white/90"
            }`}
          >
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden relative z-50 transition-all duration-500 ease-in-out ${
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
              className={`bg-white shadow-xl shadow-black/5 border border-gray-200/80 overflow-hidden w-[960px] ${
                scrolled ? "rounded-b-xl border-t-0" : "rounded-xl"
              }`}
            >
              <div className="p-7">
                {activeMenuData && (
                  <div
                    key={activeMenu}
                    className={`grid gap-10 ${
                      activeMenuData.sections.length > 2 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {activeMenuData.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4">
                          {section.title}
                        </h4>
                        <div className="flex flex-col">
                          {section.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="group -mx-2 px-2 py-2.5 rounded-md transition-colors duration-150 hover:bg-gray-50"
                            >
                              <div className="text-[13px] font-semibold text-[#01463A] group-hover:text-[#058B74] transition-colors">
                                {item.label}
                              </div>
                              <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#01463A] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-20 pb-10">
          {/* Nav Links */}
          <nav className="flex flex-col gap-1 mt-8">
            {navLinks.map((link, i) => {
              const menu = link.megaMenu ? megaMenus[link.label] : null;
              const isMobileOpen = mobileActiveMenu === link.label;

              return menu ? (
                <div key={link.label} style={{ transitionDelay: menuOpen ? `${i * 75}ms` : "0ms" }}>
                  <button
                    onClick={() => setMobileActiveMenu(isMobileOpen ? null : link.label)}
                    className="w-full flex items-center justify-between text-white text-lg font-medium py-3 border-b border-white/10 hover:text-white/70 transition-all"
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {menu.sections.map((section) => (
                      <div key={section.title} className="mt-4 mb-2">
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.14em] mb-2 px-2">
                          {section.title}
                        </p>
                        {section.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 text-white/80 text-[15px] py-2.5 px-2 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/10 text-white/60 flex-shrink-0">
                              {menuIcons[item.icon]}
                            </span>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-medium py-3 border-b border-white/10 hover:text-white/70 transition-all"
                  style={{ transitionDelay: menuOpen ? `${i * 75}ms` : "0ms" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
              style={{
                transitionDelay: menuOpen ? `${navLinks.length * 75}ms` : "0ms",
              }}
            >
              Get Started
            </a>
            <p className="text-white/40 text-xs text-center mt-6">
              &copy; {new Date().getFullYear()} Atlas Screening
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
