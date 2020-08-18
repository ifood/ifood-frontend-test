import { HOME_PATH } from './containers/App/urls'

// Base URI to get authorization from Spotify
const spotifyAuthorizeURI = 'https://accounts.spotify.com/authorize'

// App's client ID
const clientId = '11cea37f8c9e420fb252ea7360e2448b'

// URI to redirect configured in the Spotify Dashboard app
const redirectUri = `http://localhost:3000${HOME_PATH}`

// Full URI to redirect user to get it's authorization token
export const FULL_AUTHORIZE_URI = `${spotifyAuthorizeURI}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`
