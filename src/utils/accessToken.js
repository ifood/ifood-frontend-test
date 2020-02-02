import qs from 'qs';

const _clearAccessTokenUrl = () =>
  window.history.pushState(null, '', window.location.href.split('#')[0]);

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    const { access_token } = qs.parse(window.location.hash.substr(1));
    _clearAccessTokenUrl();
    return access_token;
  }

  return accessToken;
};

export const setAccessToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
};
