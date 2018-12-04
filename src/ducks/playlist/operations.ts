import { CancelTokenSource } from 'axios';
import { Dispatch } from 'redux';

import { generateCancellationToken } from '../../api/axios';
import * as api from '../../api/spotify';
import * as actions from './actions';

export function getPage(
  token: string,
  currentCancelToken: CancelTokenSource | null,
  pageAddress: string,
) {
  return async (dispatch: Dispatch) => {
    // cancel ongoing request
    if (currentCancelToken) {
      currentCancelToken.cancel();
    }
    const cancellationToken = generateCancellationToken();
    dispatch(actions.listPlaylistsBegin(cancellationToken));
    try {
      const pagingObject = await api.getPage(
        token,
        cancellationToken,
        pageAddress,
      );
      dispatch(actions.listPlaylistsSuccess(pagingObject));
    } catch (err) {
      dispatch(actions.listPlaylistsFailure('Sorry, could not load playlists'));
    }
  };
}

export function listFeaturedPlaylists(
  token: string,
  currentCancelToken: CancelTokenSource | null,
  countryCode?: string | null,
) {
  return async (dispatch: Dispatch) => {
    // cancel ongoing request
    if (currentCancelToken) {
      currentCancelToken.cancel();
    }
    const cancellationToken = generateCancellationToken();
    dispatch(actions.listPlaylistsBegin(cancellationToken));
    try {
      const pagingObject = await api.getFeaturedPlaylists(
        token,
        cancellationToken,
        countryCode,
      );
      dispatch(actions.listPlaylistsSuccess(pagingObject));
    } catch (err) {
      dispatch(actions.listPlaylistsFailure('Sorry, could not load playlists'));
    }
  };
}

export function searchPlaylists(
  token: string,
  currentCancelToken: CancelTokenSource | null,
  search: string,
) {
  return async dispatch => {
    // cancel ongoing request
    if (currentCancelToken) {
      currentCancelToken.cancel();
    }
    const cancellationToken = generateCancellationToken();
    dispatch(actions.listPlaylistsBegin(cancellationToken));
    try {
      const pagingObject = await api.searchPlaylists(
        token,
        cancellationToken,
        search,
      );
      dispatch(actions.listPlaylistsSuccess(pagingObject));
    } catch (err) {
      dispatch(actions.listPlaylistsFailure('Sorry, could not load playlists'));
    }
  };
}
