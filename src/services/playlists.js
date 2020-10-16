import getToken from './token';

const options = (token) => ({
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer ${token}`
  }),
});

const getPlaylists = async (params) => {
  const token = await getToken();

  const finalParams = JSON
    .parse(JSON.stringify(params));

  const filtersUrl = Object
    .entries(finalParams)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');

  const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?${filtersUrl}`, options(token));

  const result = await response.json();

  return result;
};

export default getPlaylists;
