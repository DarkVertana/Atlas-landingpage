import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project so route watching never drifts to
  // the parent workspace (multiple lockfiles confused the auto-detection).
  turbopack: { root: path.resolve(__dirname) },
  // Keep the dev overlay badge out from under the admin sidebar (dev-only).
  devIndicators: { position: "bottom-right" },
  images: {
    // Serve modern formats (AVIF first, WebP fallback) for next/image assets.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "cdn.svgl.app",
      },
    ],
  },
};

export default nextConfig;
