/** @type {import('next').NextConfig} */
// Forcing a redeploy on Vercel by adding a comment.
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
