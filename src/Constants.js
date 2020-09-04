const SPOTIFY_AUTHORIZATION_PARAMS = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
  response_type: 'token',
  SPOTIFY_AUTH_RESOURCE: 'https://accounts.spotify.com/authorize',
  scope: '',
};

const SPOTIFY_STATE_KEY = 'spotify_state';

export { SPOTIFY_AUTHORIZATION_PARAMS, SPOTIFY_STATE_KEY };
