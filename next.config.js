const withSass = require('@zeit/next-sass');

module.exports = withSass({
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://jesse1983.github.io/sf-frontend' : '',
  exportPathMap: () => ({
    '/': { page: '/index' },
  }),
});
