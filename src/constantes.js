const SPOTIFY_URL_FEATURED_PLAYLISTS = 'https://api.spotify.com/v1/browse/featured-playlists';

const SPOTIFY_URL_AUTHORIZE = 'https://accounts.spotify.com/authorize?client_id=fbdbbda77b374c6cb7993f4c5c6e7f20&response_type=token&redirect_uri=http://localhost:3000/authorize';

const CLIENT_ID = 'fbdbbda77b374c6cb7993f4c5c6e7f20'; // Your client id
const CLIENT_SECRET = 'e40742098ed74467b447b2a51f3c7c2b'; // Your secret
const REDIRECT_URI = 'localhost:3000/authorize'; // Your redirect uri

const MOCK_FILTER = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

const UPDATE_LIST = 'UPDATE';

export default {
    SPOTIFY_URL_FEATURED_PLAYLISTS, SPOTIFY_URL_AUTHORIZE, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, MOCK_FILTER, UPDATE_LIST
}