import * as actions from './actions';

const TOKEN_STORAGE_KEY: 'token' = 'token';

export function init() {
  return dispatch => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      dispatch(actions.setAuthToken(token));
    }
  };
}

export function signIn(token: string) {
  return dispatch => {
    dispatch(actions.setAuthToken(token));
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  };
}

export function signOut() {
  return dispatch => {
    dispatch(actions.clearAuthToken());
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  };
}
