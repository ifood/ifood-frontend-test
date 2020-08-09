import axios from 'axios';
import { getSession } from '../services/auth';

export const API_MOCKY = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const API_SPOTIFY = axios.create({
  baseURL: 'https://api.spotify.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API_SPOTIFY.interceptors.request.use(async config => {
  const access_token = getSession();
  if (access_token) {
    config.headers.Authorization = `${access_token}`;
  }
  return config;
});
