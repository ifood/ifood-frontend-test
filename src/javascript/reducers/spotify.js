import {
  SET_ACCESS_TOKEN,
  FETCH_FEATURED_PLAYLISTS,
} from "../constants/index.json";
import _ from "lodash";

const defaultState = {
  accessToken: null,
  playlists: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.token,
      };

    case `${FETCH_FEATURED_PLAYLISTS}_FULFILLED`:
      const playlists = _.get(action.payload, "data.playlists.items", []);
      return {
        ...state,
        playlists,
      };

    default:
      return { ...state };
  }
};
