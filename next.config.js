const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const env = {
    CALLBACK_URL: (() => {
      if (isDev) return 'http://localhost:3000/playlists'
      if (isProd) return 'https://spotifood.vercel.app/playlists'
      return 'CALLBACK_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })()
  }

  return {
    env,
  }
}