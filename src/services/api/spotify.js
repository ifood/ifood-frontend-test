import axios from 'axios';

import { SPOTIFY_API_URL } from '../../constants';
import { getCredentials } from '../../helpers/auth';

const defaultParams = {
  locale: 'pt_BR',
  country: 'BR',
  timestamp: new Date().toISOString(),
  limit: 12,
  offset: 0,
};

const SpotifyApiService = () => {
  const getFeaturedPlaylists = async (params) => {
    const response = await axios.get(SPOTIFY_API_URL, {
      headers: { Authorization: getCredentials() },
      params: params || defaultParams,
    });

    return response.data.playlists.items;
  };

  return {
    getFeaturedPlaylists,
  };
};

export default SpotifyApiService;
