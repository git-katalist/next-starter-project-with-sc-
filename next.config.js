/** @type {import('next').NextConfig} */

const { prefix } = "./utils/prefix";

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
