import { useMemo } from 'react';
import { parse } from 'qs';
import { api } from '../services/api';

const tokenKey = 'spotifood-token';
const stateKey = 'spotifood-state';

const redirectToAuthorize = (state: string) => {
  window.location.assign(
    `${process.env.REACT_APP_AUTH_URL}?` +
      `client_id=${encodeURIComponent(process.env.REACT_APP_AUTH_CLIENT_ID as string)}&` +
      `redirect_uri=${encodeURIComponent(process.env.REACT_APP_AUTH_REDIRECT_URI as string)}&` +
      `state=${encodeURIComponent(state)}&` +
      `response_type=token`
  );
};

const redirectToHome = () => {
  window.location.assign('/');
};

const createRandomState = () => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return '????????????????'
    .split('?')
    .map(() => possible.charAt(Math.floor(Math.random() * possible.length)))
    .join('');
};

const removeHashParams = () => {
  window.history.replaceState(null, document.title, window.location.pathname);
};

const getHashParams = () => {
  const params = parse(window.location.hash);
  return {
    token: params['#access_token'] as string,
    state: params.state as string,
  };
};

const getAuth = () => {
  const storedToken = localStorage.getItem(tokenKey);
  if (storedToken) {
    return { token: storedToken };
  }

  const { token, state } = getHashParams();
  removeHashParams();

  const storedState = localStorage.getItem(stateKey);
  localStorage.removeItem(stateKey);

  if (token && state === storedState) {
    localStorage.setItem(tokenKey, token);
    return { token };
  }

  return null;
};

const login = () => {
  const state = createRandomState();
  localStorage.setItem(stateKey, state);
  redirectToAuthorize(state);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
  redirectToHome();
};

const setAuthToApi = (token?: string) => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );
  api.interceptors.request.use((requestConfig) => {
    requestConfig.headers.Authorization = `Bearer ${token}`;
    return requestConfig;
  });
};

export const useAuth = () => {
  return useMemo(() => {
    const auth = getAuth();
    setAuthToApi(auth?.token);
    return { auth, login, logout };
  }, []);
};
