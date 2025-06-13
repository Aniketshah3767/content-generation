import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
  eslint: {
    // This skips ESLint during production builds on Vercel (optional for now)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
