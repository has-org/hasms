/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s3.villa-seaview.online", "localhost"],
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "s3.villa-seaview.online",
        pathname: "/*",
      },

    ],

    loader: 'custom',
    loaderFile: '/loader.js',
  },
  output: "standalone",
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
};

module.exports = nextConfig;
