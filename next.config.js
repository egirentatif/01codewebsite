/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  images: {
    domains: ['localhost', 'vercel.app'],
  },
};

module.exports = nextConfig;
