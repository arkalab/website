/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;


// const withNextra = require('nextra')({
//   theme: './theme.tsx',
//   themeConfig: './theme.config.jsx'
// })

// module.exports = withNextra({
//   output: 'export',
//   i18n: {
//     locales: ['en', 'pt'],
//     defaultLocale: 'en'
//   },
// })

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })