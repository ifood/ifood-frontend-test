import {
  SET_ACCESS_TOKEN,
  FETCH_FEATURED_PLAYLISTS,
} from "../constants/index.json";
import axios from "axios";
import { SPOTIFY_FEATURED_PLAYLISTS } from "../constants/urls.js";
import { param } from "../utils/index.js";

const actionCreators = {
  setAccessToken(token) {
    return {
      type: SET_ACCESS_TOKEN,
      payload: { token },
    };
  },

  fetchFeaturedPlaylists(accessToken, filters) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    const queryString = param(filters);
    const url = `${SPOTIFY_FEATURED_PLAYLISTS}?${queryString}`;

    return {
      type: FETCH_FEATURED_PLAYLISTS,
      payload: {
        promise: axios.get(url, { headers }),
      },
    };
  },
};

export default actionCreators;
