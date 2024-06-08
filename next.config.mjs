/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'quaint-goat-395.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'awaited-bear-69.convex.cloud',
      },

      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
}

export default nextConfig
