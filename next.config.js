/** @type {import('next').NextConfig} */
const dns = require('dns')

dns.setDefaultResultOrder('ipv4first')
const nextConfig = {
  images: {
    // domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    loader: 'imgix',
    // path: '/',
    // unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  env: {
    // For Docker Containers to communicate
    // NEXT_PUBLIC_STRAPI_API_URL: 'http://backend:1338/api',
    // For local development without Docker
    // NEXT_PUBLIC_STRAPI_API_URL: 'http://202.181.146.26:1338/api',
    // NEXT_PUBLIC_STRAPI_URL: 'http://202.181.146.26:1338',
    // NEXT_PUBLIC_SITE_URL: 'https://clg-frontend.vercel.app',
    // NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
