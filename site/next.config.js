/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Achtnullzwei Kasm Registry',
    description: 'Personal Kasm Registry for Achtnullzwei.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/achtnullzwei/kasm-registry/',
    contactUrl: 'https://github.com/achtnullzwei/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
