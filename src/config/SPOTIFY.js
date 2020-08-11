export const AUTHORIZE_ENDPOINT =
  process.env.REACT_APP_AUTHORIZE_ENDPOINT ||
  'https://accounts.spotify.com/authorize';
export const CLIENT_ID =
  process.env.REACT_APP_CLIENT_ID || '3579712af8ae42d1959b4a1df703730c';
export const REDIRECT_URI =
  process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000';
export const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE || 'token';
