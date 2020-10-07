import axios from 'axios';

const mockyApi = axios.create({
  baseURL: process.env.REACT_APP_MOCKY_API
});

const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API
});

const getFilterData = async () => {
  const response = await mockyApi.get('v2/5a25fade2e0000213aa90776');

  const {
    data: { filters }
  } = response;

  return filters;
};

export { getFilterData, spotifyApi };
