import Axios from 'axios';
import { removeAccessToken } from '../utils/accessToken';

export const getFilters = async () => {
  const { data } = await Axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');

  return data.filters;
};

const _handleFeaturedPlaylists = ({ response }) => {
  if (response.status === 401) {
    return removeAccessToken();
  }

  return response;
};

export const getFeaturedPlaylists = async (params = {}) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const { data } = await Axios.get('https://api.spotify.com/v1/browse/featured-playlists',
      {
        params,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

    return data.playlists.items;
  } catch (error) {
    return _handleFeaturedPlaylists(error);
  }
};
