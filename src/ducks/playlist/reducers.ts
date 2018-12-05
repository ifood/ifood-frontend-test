import { CancelTokenSource } from 'axios';
import { IPlaylist } from '../../api/spotify';
import { PlaylistAction } from './actions';
import * as types from './types';

export interface IPlaylistState {
  cancelToken: CancelTokenSource | null;
  list: IPlaylist[];
  limit: number;
  offset: number;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
}

// set default state values
export const initialState: IPlaylistState = {
  cancelToken: null,
  limit: 20,
  list: [],
  nextPageUrl: null,
  offset: 0,
  previousPageUrl: null,
};

export default (
  state: IPlaylistState = initialState,
  action: PlaylistAction,
): IPlaylistState => {
  switch (action.type) {
    case types.PLAYLISTS_LIST_BEGIN:
      return { ...state, cancelToken: action.cancelToken };
    case types.PLAYLISTS_LIST_SUCCESS:
      return {
        ...state,
        cancelToken: null,
        limit: action.page.limit,
        list: [...action.page.items],
        nextPageUrl: action.page.next,
        offset: action.page.offset,
        previousPageUrl: action.page.previous,
      };
    case types.PLAYLISTS_LIST_APPEND:
      return {
        ...state,
        cancelToken: null,
        limit: action.page.limit,
        list: [...state.list, ...action.page.items], // append items
        nextPageUrl: action.page.next,
        offset: action.page.offset,
        previousPageUrl: action.page.previous,
      };
    case types.PLAYLISTS_LIST_FAILURE:
      return { ...state, cancelToken: null };
    default:
      return { ...state };
  }
};
