import axios from 'axios';

import { SPOTIFY_API_URL } from '../constants';
import { getCredentials } from '../helpers/auth';

const SpotifyApiService = () => {
  const getFeaturedPlaylists = async (params) => {
    const response = await axios.get(SPOTIFY_API_URL, {
      headers: { Authorization: getCredentials() },
      params,
    });

    return response.data.playlists.items;
  };

  return {
    getFeaturedPlaylists,
  };
};

export default SpotifyApiService;
