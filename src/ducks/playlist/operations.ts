import { Dispatch } from 'redux';
import * as api from '../../api/spotify';
import * as actions from './actions';

export function getPage(token: string, pageAddress: string) {
  return async (dispatch: Dispatch) => {
    try {
      const pagingObject = await api.getPage(token, pageAddress);
      dispatch(actions.listPlaylists(pagingObject));
    } catch (err) {
      // TODO: something
    }
  };
}

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

export function searchPlaylists(token: string, search: string) {
  return async dispatch => {
    try {
      const pagingObject = await api.searchPlaylists(token, search);
      dispatch(actions.listPlaylists(pagingObject));
    } catch (err) {
      // TODO: something
    }
  };
}
