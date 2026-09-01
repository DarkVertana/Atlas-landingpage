"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Criminal Background Checks", href: "/services/criminal-background-checks" },
      { label: "Identity Verification", href: "/services/ssn-trace" },
      { label: "Employment Verification", href: "/services/employment-verification" },
      { label: "County Court Searches", href: "/services/criminal-background-checks" },
      { label: "Tenant Screening", href: "/services/tenant-screening" },
      { label: "Social Media Screening", href: "/services/social-media-screening" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "FAQ", href: "/faq" },
      { label: "Dispute Resolution", href: "/dispute-resolution" },
      { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
      { label: "Client Certification", href: "/client-certification" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/atlas-screening",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5A2.5 2.5 0 012.5 6 2.5 2.5 0 015 8.5 2.5 2.5 0 017.5 6 2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21h-4z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/atlasscreening",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.75-1.6 1.5V12h2.7l-.43 2.9h-2.27v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/atlasscreening",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <div className="bg-[#F7F8F6] px-6 pt-16 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-[#E4E9E6]">
            <div className="md:w-1/3">
              <Image
                src="/assets/atlas-logo.svg"
                alt="Atlas Screening"
                width={120}
                height={30}
                className="h-auto w-[120px]"
              />
              <p className="mt-4 text-[#5B6B64] text-sm leading-relaxed max-w-xs">
                Atlas Screening is a Consumer Reporting Agency (CRA) that provides background screening services in accordance with the Fair Credit Reporting Act (FCRA) and applicable state laws.
              </p>
              <p className="mt-4 text-[#5B6B64] text-sm">Contact@atlasscreening.com</p>
              <p className="text-[#5B6B64] text-sm">(917) 275-7712</p>

              {/* Social icons — under the contact details */}
              <div className="mt-5 flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5B6B64] ring-1 ring-[#E4E9E6] transition-colors hover:bg-[#01463A] hover:text-white hover:ring-[#01463A]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:w-2/3 md:grid-cols-[0.9fr_0.9fr_1.4fr] md:gap-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[#01463A] font-semibold text-sm mb-5">{col.title}</h3>
                  <ul className="space-y-0.5">
                    {col.links.map((link) => {
                      const isActive = !link.external && pathname === link.href;
                      const className = `inline-flex items-center min-h-[40px] text-sm transition-colors md:whitespace-nowrap ${
                        isActive
                          ? "text-[#01463A] font-semibold"
                          : "text-[#5B6B64] hover:text-[#01463A]"
                      }`;
                      return (
                        <li key={link.label}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={className}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              aria-current={isActive ? "page" : undefined}
                              className={className}
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#5B6B64] text-xs leading-relaxed max-w-2xl">
              Atlas Screening is a Consumer Reporting Agency (CRA) under the FCRA. We provide screening services for lawful purposes only and do not make hiring decisions.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-[#5B6B64] text-xs">
                &copy; {new Date().getFullYear()} <span className="text-[#01463A] font-medium">Atlas Screening</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
