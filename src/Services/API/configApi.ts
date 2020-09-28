export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = process.env.PUBLIC_URL;
// export const REDIRECT_URI = window.location.protocol + '//' + window.location.hostname + "/";
export const SCOPES = ['user-read-email'];

