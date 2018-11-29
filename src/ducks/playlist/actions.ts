import { IPaging } from '../../api/spotify';
import * as types from './types';

interface IListPlaylists {
  type: typeof types.PLAYLISTS_LIST;
  page: IPaging;
}

const listPlaylists = (page: IPaging): IListPlaylists => ({
  page,
  type: types.PLAYLISTS_LIST,
});

export type PlaylistAction = IListPlaylists;

export { listPlaylists };
