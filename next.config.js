/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['161.35.66.214','placehold.co', 'localhost'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'minio',
        port: '9000',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/placehold.co/*',
      },
    ],
  },
  output: 'standalone'
}

module.exports = nextConfig
