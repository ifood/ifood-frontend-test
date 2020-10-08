import axios from 'axios';

const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API
});

const getFeaturedList = async (params) => {
  const response = await spotifyApi.get('v1/browse/featured-playlists', {
    headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
    params
  });

  const {
    data: {
      playlists: { items }
    }
  } = response;

  return items;
};

export { getFeaturedList };
