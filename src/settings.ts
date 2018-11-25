const CLIENT_ID: string =
  process.env.REACT_APP_CLIENT_ID || '2142ea936611471d90534263502f5af3';
const REDIRECT_URL: string =
  process.env.REACT_APP_REDIRECT_URL || 'http://localhost:3000';

const settings = {
  clientId: CLIENT_ID,
  redirectUrl: REDIRECT_URL,
};

export default settings;
