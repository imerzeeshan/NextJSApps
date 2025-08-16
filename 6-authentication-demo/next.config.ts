import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.clerk.com", "images.clerk.dev"], // Add both domains
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // increase limit (example: 10 MB)
    },
  },
};

export default nextConfig;
