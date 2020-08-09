const KEY = 'AUTH_SPOTIFOOD';

export const setSession = item => {
  return localStorage.setItem(KEY, JSON.stringify(item));
};

export const getSession = () => {
  return JSON.parse(localStorage.getItem(KEY));
};
