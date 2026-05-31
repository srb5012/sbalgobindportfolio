import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint 9 has Node 18 engine conflicts in this environment; type-checking
  // still runs during builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
