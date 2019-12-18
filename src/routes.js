const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  HOME: !debug ? '/ifood-frontend-test' : '/',
  CALLBACK: '/callback'
}
