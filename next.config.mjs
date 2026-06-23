/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/plywood-dealers-in-lucknow',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/plywood-wholesale-dealers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/plywood-price-in-lucknow',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig