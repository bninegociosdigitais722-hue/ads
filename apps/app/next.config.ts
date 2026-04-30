import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["@ads/config", "@ads/lib", "@ads/types", "@ads/ui"]
};

export default nextConfig;
