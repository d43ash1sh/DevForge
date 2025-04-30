/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Allow GitHub avatar images
  },
}

module.exports = nextConfig