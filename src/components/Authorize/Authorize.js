import qs from 'qs';

const Authorize = ({ location, history }) => {
  localStorage.removeItem('access-token');
  const queryParams = qs.parse(location.hash);
  const accessToken = queryParams['#access_token'];

  if (!accessToken) {
    history.push('/');
    return null;
  }

  localStorage.setItem('access-token', accessToken);
  history.push('/list');

  return null;
};

export default Authorize;
