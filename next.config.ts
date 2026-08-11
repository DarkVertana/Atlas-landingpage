import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the dev overlay badge out from under the admin sidebar (dev-only).
  devIndicators: { position: "bottom-right" },
  images: {
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
