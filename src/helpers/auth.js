import { useHistory } from 'react-router-dom';
import parserParams from '../utils/params';

let accessToken = null;
let expiresAt = null;
let tokenType = null;

const getCredentials = () => {
  return accessToken ? `${tokenType} ${accessToken}` : null;
};

const RedirectUser = () => {
  const history = useHistory();

  history.push('/dashboard');
};

const logout = () => {
  accessToken = null;
  expiresAt = null;
  tokenType = null;

  localStorage.removeItem('session');

  return false;
};

const checkCredentials = () => {
  const now = new Date().getTime();

  if (now < expiresAt) return true;

  return logout();
};

const setSession = (params) => {
  accessToken = params.access_token;
  expiresAt = parseInt(params.expires_in, 10) * 1000 + new Date().getTime();
  tokenType = params.token_type;

  localStorage.setItem('session', btoa(JSON.stringify(params)));

  return RedirectUser();
};

const authUser = () => {
  const session = localStorage.getItem('session');

  if (session) {
    try {
      const params = JSON.parse(atob(session));

      accessToken = params.access_token;
      expiresAt = parseInt(params.expires_in, 10) * 1000 + new Date().getTime();
      tokenType = params.token_type;

      return checkCredentials();
    } catch (e) {
      return logout();
    }
  }

  const params = parserParams();

  if (params.access_token && params.token_type && params.expires_in) {
    return setSession(params);
  }

  return logout();
};

export { getCredentials, authUser };
