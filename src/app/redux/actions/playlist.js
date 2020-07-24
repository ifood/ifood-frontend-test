import PlaylistRequests from '../../api/playlist';
import { addLoading, removeLoading } from './loading';

export const ACTION_SAVE_PLAYLISTS = 'ACTION_SAVE_PLAYLISTS';

export const savePlaylists = (payload) => ({
  type: ACTION_SAVE_PLAYLISTS,
  payload,
});

export const getFeaturedPlaylists = () => async (dispatch, getState) => {
  dispatch(addLoading());
  try {
    const { auth } = getState().auth;
    const response = await PlaylistRequests.getPaginated(auth);
    console.log('response', response.playlists);
    dispatch(savePlaylists(response.playlists));
  } catch (err) {
    //
  } finally {
    dispatch(removeLoading());
  }
};
