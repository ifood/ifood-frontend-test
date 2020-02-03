import Axios from 'axios';
import { removeAccessToken } from '../utils/accessToken';

export const getFilters = async () => {
  const { data } = await Axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');

  return data.filters;
};

export const getFeaturedPlaylists = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await Axios.get('https://api.spotify.com/v1/browse/featured-playlists',
      { headers: { Authorization: `Bearer ${accessToken}` } });

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      return removeAccessToken();
    }

    throw Error(error);
  }
};
