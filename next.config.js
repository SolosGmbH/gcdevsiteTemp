/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Vercel packaging finds the Next build where it expects it
  // (Vercel currently looks under app/.next in your project setup)
  distDir: 'app/.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true
  },
  serverExternalPackages: ['@prisma/client', 'prisma']
};

module.exports = nextConfig;