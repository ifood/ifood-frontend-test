const auth = btoa(
  `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
);

const options = {
  method: 'POST',
  headers: new Headers({
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }),
  body: 'grant_type=client_credentials',
};

const getToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', options);
  const result = await response.json();

  return result.access_token;
};

export default getToken;
