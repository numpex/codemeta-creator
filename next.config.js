/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
    basePath: '/codemeta-creator',
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
       test: /\.md/,
       type: 'asset/source'
    });
    return config;
  },
};

module.exports = nextConfig
