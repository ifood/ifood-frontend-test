import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Auth from '../auth';

const { REACT_APP_SPOTIFY_API_URL } = process.env;
const TIMEOUT = 1000;
const AUTH = 'Authorization';

const api: AxiosInstance = axios.create({
  baseURL: REACT_APP_SPOTIFY_API_URL,
  timeout: TIMEOUT,
});

api.interceptors.request.use((req: AxiosRequestConfig) => {
  console.log('Request', req);
  // TODO refactor when Auth be a singleton
  const { tokenType, accessToken } = new Auth().session;
  req.headers[AUTH] = `${tokenType} ${accessToken}`;
  return req;
});

api.interceptors.response.use((res: AxiosResponse) => {
  console.log('Response', res);
  return res;
});

export default api;
