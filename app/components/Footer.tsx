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
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/atlas-screening", external: true },
      { label: "Facebook", href: "https://www.facebook.com/atlasscreening", external: true },
      { label: "Instagram", href: "https://www.instagram.com/atlasscreening", external: true },
    ],
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
              />
              <p className="mt-4 text-[#5B6B64] text-sm leading-relaxed max-w-xs">
                Atlas Screening is a Consumer Reporting Agency (CRA) that provides background screening services in accordance with the Fair Credit Reporting Act (FCRA) and applicable state laws.
              </p>
              <p className="mt-4 text-[#5B6B64] text-sm">Contact@atlasscreening.com</p>
              <p className="text-[#5B6B64] text-sm">(917) 275-7712</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 md:w-2/3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[#01463A] font-semibold text-sm mb-5">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => {
                      const isActive = !link.external && pathname === link.href;
                      const className = `text-sm transition-colors ${
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
            <p className="text-[#8A968F] text-xs leading-relaxed max-w-2xl">
              Atlas Screening is a Consumer Reporting Agency (CRA) under the FCRA. We provide screening services for lawful purposes only and do not make hiring decisions.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="/sitemap.xml"
                className="text-[#8A968F] hover:text-[#01463A] text-xs transition-colors"
              >
                Sitemap
              </a>
              <p className="text-[#8A968F] text-xs">
                &copy; {new Date().getFullYear()} <span className="text-[#01463A] font-medium">Atlas Screening</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
