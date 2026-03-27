/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
