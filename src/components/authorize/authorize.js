import qs from 'qs';

const Authorize = ({ location, history }) => {
  localStorage.removeItem('token');
  const queryParams = qs.parse(location.hash);
  const accessToken = queryParams['#access_token'];

  if (!accessToken) {
    history.push('/');
    return null;
  }

  localStorage.setItem('token', accessToken);
  history.push('/');

  return null;
};

export default Authorize;