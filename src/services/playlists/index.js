import axios from "axios";

import { SPOTIFY_API_URL } from "constants/config";

const PlaylistsApiService = () => {
  const getPlaylists = async (token, params) => {
    const response = await axios.get(SPOTIFY_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    });

    const {
      data: {
        playlists: { items },
      },
    } = response;

    return items;
  };

  return {
    getPlaylists,
  };
};

export default PlaylistsApiService;
