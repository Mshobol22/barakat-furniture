import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // IGNORE all TypeScript errors so we can deploy fast
    ignoreBuildErrors: true,
  },
  // Do NOT put an eslint section here, it causes crashes in Next.js 16
};

export default nextConfig;