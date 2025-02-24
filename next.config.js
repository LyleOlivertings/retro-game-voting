/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove experimental if not needed
  images: {
    domains: ['your-image-domains.com'],
  },
}

module.exports = nextConfig