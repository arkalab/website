const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  output: "export",
  images: {
    unoptimized: true,
  },
});
