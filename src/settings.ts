const CLIENT_ID: string =
  process.env.REACT_APP_CLIENT_ID || '2142ea936611471d90534263502f5af3';
const REDIRECT_URL: string =
  process.env.REACT_APP_REDIRECT_URL || 'http://localhost:3000';
const FILTER_API_URL: string =
  process.env.FILTER_API_URL ||
  'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

const settings = {
  clientId: CLIENT_ID,
  filterApiUrl: FILTER_API_URL,
  redirectUrl: REDIRECT_URL,
};

export default settings;
