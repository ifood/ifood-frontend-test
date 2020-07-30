export const CLIENT_ID = '1e7d18dade274e5d81989a673f1aa541'
export const REDIRECT_URI = process.env.CALLBACK_URL
export const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`
