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
  // TODO refactor once Auth is a singleton
  const { tokenType, accessToken } = new Auth().session;
  req.headers[AUTH] = `${tokenType} ${accessToken}`;
  return req;
});

api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (error: any) => {
    const auth = new Auth();

    if ([401, 403].includes(error.response.status)) {
      auth.logout();
      window.location.href = '/';
    }

    if (error.response.data) {
    }

    return Promise.reject(error.response);
  },
);

export default api;
