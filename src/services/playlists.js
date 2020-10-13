import getToken from './token';

const options = (token) => ({
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer ${token}`
  }),
});

const getPlaylists = async (params) => {
  const token = await getToken();
  const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=SE&limit=2`, options(token));
  const result = await response.json();

  return result;
};

export default getPlaylists;
