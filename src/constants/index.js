export const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const REDIRECT_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000' : 'http://localhost:3000';
export const PLAYLISTS_REFRESH_INTERVAL = 30000;