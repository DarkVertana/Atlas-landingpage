import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atlas Screening: Trust Fast. Hire to Last.",
    short_name: "Atlas Screening",
    description:
      "FCRA-compliant employment background checks: criminal records, identity verification, employment verification, and tenant screening.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#01463A",
    icons: [
      {
        src: "/assets/atlas-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/assets/atlas-logo.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
