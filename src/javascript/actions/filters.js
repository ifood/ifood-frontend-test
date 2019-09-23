import {
  GET_TRENDING_PLAYLISTS_FILTERS,
  SET_FILTER,
} from "../constants/index.json";
import { TRENDING_PLAYLIST_FILTERS } from "../constants/urls";
import axios from "axios";

const actionCreators = {
  getFilters() {
    return {
      type: GET_TRENDING_PLAYLISTS_FILTERS,
      payload: {
        promise: axios.get(TRENDING_PLAYLIST_FILTERS),
      },
    };
  },

  setFilter(field, value) {
    return {
      type: SET_FILTER,
      payload: {
        field: field,
        value: value,
      },
    };
  },
};

export default actionCreators;
