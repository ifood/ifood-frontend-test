import { playlisFilterActionTypes } from '../actions/actionTypes';

const initialState = {
  playlistsFilters: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case playlisFilterActionTypes.FETCH_PLAYLISTS_FILTER_SUCCESS:
      return {
        ...state,
        playlistsFilters: action.payload.data.filters
      };
    case playlisFilterActionTypes.FETCH_PLAYLISTS_FILTER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
