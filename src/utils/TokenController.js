import { SPOTIFY_TOKEN } from '../Constants';

function getToken() {
  return localStorage.getItem(SPOTIFY_TOKEN);
}

function setToken(token) {
  localStorage.setItem(SPOTIFY_TOKEN, token);
}

function removeToken() {
  localStorage.removeItem(SPOTIFY_TOKEN);
}

export { getToken, setToken, removeToken };
