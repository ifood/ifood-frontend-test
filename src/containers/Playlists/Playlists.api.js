import axios from 'axios';
import { PLAYLISTS_URL, FILTER_METADATA_URL } from './Playlists.constants';

class PlaylistsApi {
  static fetchPlaylists = async (params) => {
    const accessToken = localStorage.getItem('spotifood-access-token');
    const options = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params,
    };

    const response = await axios.get(PLAYLISTS_URL, options);
    return response.data.playlists.items;
  }

  static fetchFiltersMetadata = async () => {
    const response = await axios.get(FILTER_METADATA_URL);
    return response.data.filters;
  }
}

export default PlaylistsApi;
