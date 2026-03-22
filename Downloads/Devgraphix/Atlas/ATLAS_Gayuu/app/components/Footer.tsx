import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Footer Content */}
      <div className="bg-[#f5f5f5] px-6 pt-16 pb-8">
        <div className="mx-auto max-w-7xl">
          {/* Branding + Link Columns */}
          <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-gray-200">
            {/* Left — Branding */}
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

            {/* Right — Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:w-2/3">
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-5">Services</h4>
              <ul className="space-y-3">
                {[
                  "Criminal Background Checks",
                  "Employment Verification",
                  "National Criminal Database",
                  "Motor Vehicle Records",
                  "Social Media Screening",
                  "Sex Offender Registry",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-5">Company</h4>
              <ul className="space-y-3">
                {["About Us", "How It Works", "Careers", "Blog", "Press"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-5">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "FCRA Compliance", "Help Center", "FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-5">Connect</h4>
              <ul className="space-y-3">
                {["LinkedIn", "X (Twitter)", "Facebook", "Instagram"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>

          {/* Copyright + Disclaimer */}
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
