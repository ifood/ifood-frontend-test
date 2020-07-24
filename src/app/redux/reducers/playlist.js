import { PlaylistActions } from '../actions';

const initialState = {
  list: null,
  filters: null,
};

export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PlaylistActions.ACTION_SAVE_PLAYLISTS:
      return {
        ...state,
        list: action.payload,
      };
    case PlaylistActions.ACTION_SAVE_PLAYLIST_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export function getPlaylists(state) {
  return state.playlist.list;
}

export function getPlaylistFilters(state) {
  return state.playlist.filters;
}
