const withNextra = require('nextra')({
  theme: './theme.tsx',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  },
  images: {
    unoptimized: true,
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })