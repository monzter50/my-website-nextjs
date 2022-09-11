
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  images: {
    domains: ["s3.amazonaws.com"],
    formats: ["image/webp"],
},
}
