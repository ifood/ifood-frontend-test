const URL_AUTHORIZE_SPOTIFY = 'https://accounts.spotify.com/authorize';
const URL_API_SPOTIFY = 'https://api.spotify.com/v1/browse/featured-playlists';
const AUTH_REDIRECT_URI = 'http://localhost:3000';
const URL_MOCK = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';
const CLIENT_ID = 'e81fcf06b23a411ba35b2e91a9f9af28';
const API_URL = 'https://api.spotify.com/v1'

const environemnt = {
    urlApiSpotify: URL_API_SPOTIFY,
    urlAuthorizeSpotify: URL_AUTHORIZE_SPOTIFY,
    authRedirectUri: AUTH_REDIRECT_URI,
    urlMock: URL_MOCK,
    clientId: CLIENT_ID,
    apiUrl: API_URL
}

export default environemnt;