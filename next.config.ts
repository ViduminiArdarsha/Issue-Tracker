import type { NextConfig } from "next";


const nextConfig: NextConfig = {
 eslint: {
    ignoreDuringBuilds: true, // skips lint errors during 'next build'
  },
};
export default nextConfig;
