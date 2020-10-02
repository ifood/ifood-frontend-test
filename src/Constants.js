const SPOTIFY_TOKEN = 'spotify_token';

const SPOTIFY_PARAMS = {
  client_id: process.env.REACT_APP_SPOTIFY_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URL,
  response_type: 'token',
  SPOTIFY_AUTH_RESOURCE: 'https://accounts.spotify.com/authorize',
  scope: '',
};

const VIEW_STATUS = {
  LOADING: 0,
  DATA: 1,
  ERROR: 2,
};

const COMPONENT_TYPES = {
  SELECT: 'SELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
};

const SCREEN = {
  SMALL: '420px',
  MEDIUM: '700px',
};

const DEBOUNCE_DELAY = 500;

const CHAOTIC_REFRESH = 30000;

export {
  CHAOTIC_REFRESH,
  COMPONENT_TYPES,
  DEBOUNCE_DELAY,
  SPOTIFY_PARAMS,
  SPOTIFY_TOKEN,
  VIEW_STATUS,
  SCREEN,
};
