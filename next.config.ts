import type { NextConfig } from "next"

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // Next.js rewrite to proxy API requests to backend server.
        // Ensures consistent API base path and avoids cross-domain cookies issues by routing through the same origin.
        source: "/api/v1/:path*",
        destination: `${baseURL}/api/v1/:path*`,
      },
    ]
  },
}

export default nextConfig
