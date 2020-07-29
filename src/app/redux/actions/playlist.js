import PlaylistRequests from '../../api/playlist';
import { addLoading, removeLoading } from './loading';
import { saveAuthentication } from './auth';

export const ACTION_SAVE_PLAYLISTS = 'ACTION_SAVE_PLAYLISTS';
export const ACTION_SAVE_PLAYLIST_FILTERS = 'ACTION_SAVE_PLAYLIST_FILTERS';
export const ACTION_SAVE_FILTERED_PLAYLIST_BY_NAME = 'ACTION_SAVE_FILTERED_PLAYLIST_BY_NAME';

export const savePlaylists = (payload) => ({
  type: ACTION_SAVE_PLAYLISTS,
  payload,
});

export const saveFilteredPlaylistByName = (payload) => ({
  type: ACTION_SAVE_FILTERED_PLAYLIST_BY_NAME,
  payload,
});

export const savePlaylistFilters = (payload) => ({
  type: ACTION_SAVE_PLAYLIST_FILTERS,
  payload,
});

export const getFeaturedPlaylists = (filters = {}) => async (dispatch, getState) => {
  dispatch(addLoading());
  try {
    const { auth } = getState().auth;
    const { country, offset } = filters;

    dispatch(savePlaylists(null));
    // workaround to wrong value in mocky filters api country array (getting en_US instead of US)
    if (country && country.length > 2) {
      filters = {
        ...filters,
        country: country.substr(country.length - 2, country.length),
      };
    }

    if (offset) filters = { ...filters, offset: offset <= 0 ? 0 : offset - 1 };


    const response = await PlaylistRequests.getPaginated(auth, filters);
    dispatch(saveFilteredPlaylistByName(null));
    dispatch(savePlaylists(response));
  } catch (err) {
    if (err.status === 401) {
      dispatch(saveAuthentication(null));
    }
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
