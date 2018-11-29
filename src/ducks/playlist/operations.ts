import { Dispatch } from 'redux';
import * as api from '../../api/spotify';
import * as actions from './actions';

export function listFeaturedPlaylists(token: string) {
  return async (dispatch: Dispatch) => {
    try {
      const pagingObject = await api.getFeaturedPlaylists(token);
      dispatch(actions.listPlaylists(pagingObject));
    } catch (err) {
      // TODO: something
    }
  };
}

export function searchPlaylist(search: string) {
  return async dispatch => {
    try {
      // const pagingObject = await api.searchPlaylists(search);
      // dispatch(actions.listPlaylists(pagingObject.items));
    } catch (err) {
      // TODO: something
    }
  };
}
