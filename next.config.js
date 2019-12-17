const withCSS = require('@zeit/next-css')
const ROUTES = require('./src/routes')

const debug = process.env.NODE_ENV !== 'production'

module.exports = withCSS({
  exportPathMap() {
    return {
      '/': { page: ROUTES.HOME },
      '/callback': { page: ROUTES.CALLBACK }
    }
  },
  assetPrefix: !debug ? '/ifood-frontend-test/' : '',
  env: {
    CLIENT_ID: 'a62f3983edba4acdbf505b5f49c7d07e',
    REDIRECT_URI: debug
      ? 'http://localhost:3000/callback'
      : 'https://ricardo-teixeira.github.io/ifood-frontend-test/callback'
  }
})
