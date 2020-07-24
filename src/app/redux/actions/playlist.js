import PlaylistRequests from '../../api/playlist';
import { addLoading, removeLoading } from './loading';

export const ACTION_SAVE_PLAYLISTS = 'ACTION_SAVE_PLAYLISTS';
export const ACTION_SAVE_PLAYLIST_FILTERS = 'ACTION_SAVE_PLAYLIST_FILTERS';

export const savePlaylists = (payload) => ({
  type: ACTION_SAVE_PLAYLISTS,
  payload,
});

export const savePlaylistFilters = (payload) => ({
  type: ACTION_SAVE_PLAYLIST_FILTERS,
  payload,
});

export const getFeaturedPlaylists = () => async (dispatch, getState) => {
  dispatch(addLoading());
  try {
    const { auth } = getState().auth;
    const response = await PlaylistRequests.getPaginated(auth);
    dispatch(savePlaylists(response.playlists));
  } catch (err) {
    //
  } finally {
    dispatch(removeLoading());
  }
};

export const getPlaylistFilters = () => async (dispatch) => {
  dispatch(addLoading());
  try {
    const { filters } = await PlaylistRequests.getPlaylistFilters();
    if (filters && filters.length >= 1) dispatch(savePlaylistFilters(filters));
  } catch (err) {
    //
  } finally {
    dispatch(removeLoading());
  }
};
