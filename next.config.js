const withCSS = require('@zeit/next-css')
const ROUTES = require('./src/routes')

const debug = process.env.NODE_ENV !== 'production'

module.exports = withCSS({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/callback': { page: ROUTES.CALLBACK }
    }
  },
  env: {
    CLIENT_ID: 'a62f3983edba4acdbf505b5f49c7d07e',
    REDIRECT_URI: debug
      ? 'http://localhost:3000/callback'
      : 'https://spotifood-test.herokuapp.com/callback'
  }
})
