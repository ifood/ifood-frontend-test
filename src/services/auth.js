const KEY = 'AUTH_SPOTIFOOD';

export const setSession = item => {
  return localStorage.setItem(KEY, JSON.stringify(item));
};

export const getSession = () => {
  if (localStorage.getItem(KEY)) {
    return `Bearer ${JSON.parse(localStorage.getItem(KEY)).access_token}`;
  }
  return null;
};
