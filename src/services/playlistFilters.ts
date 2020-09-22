import axios from 'axios';

import config from '../config';

class PlaylistsFilters {
  static async get() {
    const { playlistFiltersApi } = config;

    const response = await axios.get(playlistFiltersApi);

    return response.data?.filters;
  }
}

export default PlaylistsFilters;
