import * as types from './types';

interface ISetAuthToken {
  type: typeof types.AUTH_TOKEN_SET;
  token: string;
}

interface IClearAuthToken {
  type: typeof types.AUTH_TOKEN_CLEAR;
}

const setAuthToken = (token: string): ISetAuthToken => ({
  token,
  type: types.AUTH_TOKEN_SET,
});
const clearAuthToken = (): IClearAuthToken => ({
  type: types.AUTH_TOKEN_CLEAR,
});

export type AuthAction = ISetAuthToken | IClearAuthToken;

export { clearAuthToken, setAuthToken };
