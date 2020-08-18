import axios from 'axios';
import Cookie from 'js-cookie';

export const mockyApi = axios.create({
  baseURL: 'https://www.mocky.io/v2/5a25fade2e0000213aa90776',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

spotifyApi.interceptors.request.use(
  config => {
    const configWithAuthorization = config;
    const token = Cookie.get('USER_TOKEN');

    if (token) {
      configWithAuthorization.headers.Authorization = `Bearer ${token}`;
    }

    return configWithAuthorization;
  },
  error => {
    console.log(error);
  },
);

spotifyApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      window.location.pathname = '/';
    }
  },
);
