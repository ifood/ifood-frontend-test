import { playlistActionTypes } from '../actions/actionTypes';

const initialState = {
  playlists: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case playlistActionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload
      };
    case playlistActionTypes.FETCH_PLAYLISTS_ERROR:
      return {
        ...state,
        error: action.payload.response.data
      };
    default:
      return state;
  }
}
