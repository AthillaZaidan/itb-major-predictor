import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itb.ac.id',
        pathname: '/files/**',
      },
    ],
  },
};

export default nextConfig;
