/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'res.cloudinary.com', 'i.ibb.co'],
  },
  //   // Will be available on both server and client
  //   publicRuntimeConfig: {
  //     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // }
}

module.exports = nextConfig
