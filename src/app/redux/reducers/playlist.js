import { PlaylistActions } from '../actions';

const initialState = {
  list: null,
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
    default:
      return state;
  }
};

export function getPlaylists(state) {
  return state.playlist.list;
}
