"use client";

import { useEffect } from "react";

/* Forces the fixed header into its solid (white) state for pages whose hero is
   light — otherwise the transparent header's white logo/links vanish against a
   bright background. Renders nothing; just toggles the body class the Header
   already observes. */
export default function SolidHeader() {
  useEffect(() => {
    document.body.classList.add("force-header-solid");
    return () => document.body.classList.remove("force-header-solid");
  }, []);
  return null;
}
