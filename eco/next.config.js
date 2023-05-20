/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  env: {
    APP_NAME: process.env.APP_NAME,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    ENV: process.env.ENV, // dev or prod
    DOMAIN: process.env.DOMAIN,
  },
  i18n: {
    locales: ['en', 'si'],
    defaultLocale: 'en',
  },
  // productionBrowserSourceMaps: true,
  reactStrictMode: true, // orginal
  compiler: {
    styledComponents: true,
    swcMinify: true,
  },
  images: {
    domains: ['google.com', 'lh3.googleusercontent.com', 'storage.googleapis.com'],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, './src/common/styles')],
  // },
};

module.exports = nextConfig;
