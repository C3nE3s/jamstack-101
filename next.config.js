/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three'])
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
}

module.exports = withTM(nextConfig)
