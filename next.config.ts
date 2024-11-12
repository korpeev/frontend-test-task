import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/_variables.scss";`,
  },
  ssr: false,
};

export default nextConfig;
