"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "bg-transparent backdrop-blur-none shadow-none"
            : scrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm"
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
            {navLinks.map((link) => (
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
            ))}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#01463A] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-20 pb-10">
          {/* Nav Links */}
          <nav className="flex flex-col gap-1 mt-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-medium py-3 border-b border-white/10 hover:text-white/70 transition-all"
                style={{
                  transitionDelay: menuOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
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
