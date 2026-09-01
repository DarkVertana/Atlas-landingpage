"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Wraps the marketing site chrome (header, footer) around page content,
// but hides all of it inside the admin panel, which has its own shell.
export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  // The tenant microsite ships its own header/footer for a standalone feel.
  const isTenant = pathname?.startsWith("/tenant");

  if (isAdmin || isTenant) return <>{children}</>;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#01463A] focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}
