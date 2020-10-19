export const FILTER_API_URL =
  'https://www.mocky.io/v2/5a25fade2e0000213aa90776';

export const SPOTIFY_API_URL =
  'https://api.spotify.com/v1/browse/featured-playlists';

export const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}`;
