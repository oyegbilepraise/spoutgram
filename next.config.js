/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ['res.cloudinary.com'],
  },
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
