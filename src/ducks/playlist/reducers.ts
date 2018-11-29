import { IPlaylist } from '../../api/spotify';
import { PlaylistAction } from './actions';
import * as types from './types';

export interface IPlaylistState {
  list: IPlaylist[];
  limit: number;
  offset: number;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
}

// set default state values
export const initialState: IPlaylistState = {
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
    case types.PLAYLISTS_LIST:
      return {
        ...state,
        limit: action.page.limit,
        list: action.page.items,
        nextPageUrl: action.page.next,
        offset: action.page.offset,
        previousPageUrl: action.page.previous,
      };
    default:
      return { ...state };
  }
};
