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
      { label: "Employment Verification", href: "/services/employment-verification" },
      { label: "National Criminal Database", href: "/services" },
      { label: "Motor Vehicle Records", href: "/services/mvr" },
      { label: "Social Media Screening", href: "/services/social-media-screening" },
      { label: "Sex Offender Registry", href: "/services/sex-offender-registry" },
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
      { label: "FCRA Compliance", href: "/trust" },
      { label: "Help Center", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
      { label: "X (Twitter)", href: "https://x.com", external: true },
      { label: "Facebook", href: "https://www.facebook.com", external: true },
      { label: "Instagram", href: "https://www.instagram.com", external: true },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <div className="bg-[#f5f5f5] px-6 pt-16 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-gray-200">
            <div className="md:w-1/3">
              <Image
                src="/assets/atlas-logo.svg"
                alt="Atlas Screening"
                width={120}
                height={30}
              />
              <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
                Atlas Screening delivers compliant, accurate background checks with secure reporting and strict adherence to FCRA and state laws.
              </p>
              <p className="mt-4 text-gray-500 text-sm">info@atlasscreening.com</p>
              <p className="text-gray-500 text-sm">1-800-555-0199</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:w-2/3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-gray-900 font-semibold text-sm mb-5">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => {
                      const isActive = !link.external && pathname === link.href;
                      const className = `text-sm transition-colors ${
                        isActive
                          ? "text-[#01463A] font-semibold"
                          : "text-gray-500 hover:text-gray-900"
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
            <p className="text-gray-400 text-xs leading-relaxed max-w-2xl">
              Atlas Screening is a Consumer Reporting Agency (CRA) under the FCRA. We provide screening services for lawful purposes only and do not make hiring decisions.
            </p>
            <p className="text-gray-400 text-xs whitespace-nowrap">
              &copy; {new Date().getFullYear()} <span className="text-[#01463A] font-medium">Atlas Screening</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
