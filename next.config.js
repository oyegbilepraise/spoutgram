/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    ignoreDuringDevelopment: true,
  }
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/_next/static/sitemap.xml',
      },
    ]
  },
}

module.exports = nextConfig
