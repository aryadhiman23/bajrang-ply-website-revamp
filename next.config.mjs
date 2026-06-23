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
        destination: '/about',
        permanent: true,
      },
      {
        source: '/plywood-wholesale-dealers',
        destination: '/products',
        permanent: true,
      },
    ]
  },
}

export default nextConfig