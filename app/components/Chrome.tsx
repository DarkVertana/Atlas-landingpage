"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";

// The chat widget is interaction-only and below the fold — defer it so it
// never blocks first paint or hydration on low-end devices.
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

// Wraps the marketing site chrome (header, footer, chat) around page content,
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
      <ChatWidget />
    </>
  );
}
