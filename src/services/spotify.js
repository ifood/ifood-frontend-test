import axios from 'axios';
import { toast } from 'react-toastify';

import { Auth } from './auth';

const {
  REACT_APP_SPOTIFY_API_URL,
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_REDIRECT_URI,
} = process.env;

const api = axios.create({
  baseURL: REACT_APP_SPOTIFY_API_URL,
});

api.interceptors.request.use((config) => {
  const auth = new Auth();
  const options = config;

  options.headers.Authorization = auth.getCredentials();

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const auth = new Auth();

    if ([401, 403].includes(error.response.status)) {
      auth.logout();
      window.location.href = '/';
    }

    if (error.response.data) {
      const { message } = error.response.data.error;
      toast.error(message);
    }

    return Promise.reject(error.response);
  },
);

const getSpotifyURL = () => {
  const scopes = 'user-read-email';
  return `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scopes,
  )}&redirect_uri=${encodeURIComponent(
    REACT_APP_SPOTIFY_REDIRECT_URI,
  )}&response_type=token`;
};

export { api, getSpotifyURL };
