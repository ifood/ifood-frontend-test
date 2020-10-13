import { createActions, createReducer } from "reduxsauce";

export const {
  Types: PlaylistsTypes,
  Creators: PlaylistsActions,
} = createActions({
  playlists: ["payload"],
  playlistsSuccess: ["response"],
  playlistsFailure: ["error"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  playlists: [],
  error: "",
};

const playlists = (state) => ({
  ...state,
  isLoading: true,
});

const playlistsSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  playlists: response.playlists.items,
  error: "",
});

const playlistsFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  error: error.message,
});

export default createReducer(INITIAL_STATE, {
  [PlaylistsTypes.PLAYLISTS]: playlists,
  [PlaylistsTypes.PLAYLISTS_SUCCESS]: playlistsSuccess,
  [PlaylistsTypes.PLAYLISTS_FAILURE]: playlistsFailure,
});
