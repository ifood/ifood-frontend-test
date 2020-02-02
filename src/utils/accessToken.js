import qs from 'qs';

export const setAccessToken = () => {
  const { access_token } = qs.parse(window.location.hash.substr(1));
  localStorage.setItem('access_token', access_token);
  return window.history.replaceState(null, null, ' ');
};

export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};
