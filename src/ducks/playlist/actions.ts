import { CancelTokenSource } from 'axios';
import { IPaging } from '../../api/spotify';
import * as types from './types';

interface IListPlaylistsBegin {
  type: typeof types.PLAYLISTS_LIST_BEGIN;
  cancelToken: CancelTokenSource;
}
const listPlaylistsBegin = (
  cancelToken: CancelTokenSource,
): IListPlaylistsBegin => ({
  cancelToken,
  type: types.PLAYLISTS_LIST_BEGIN,
});

interface IListPlaylistsSuccess {
  type:
    | typeof types.PLAYLISTS_LIST_SUCCESS
    | typeof types.PLAYLISTS_LIST_APPEND;
  page: IPaging;
}
const listPlaylistsSuccess = (page: IPaging): IListPlaylistsSuccess => ({
  page,
  type: types.PLAYLISTS_LIST_SUCCESS,
});
const listPlaylistsAppend = (page: IPaging): IListPlaylistsSuccess => ({
  page,
  type: types.PLAYLISTS_LIST_APPEND,
});

interface IListPlaylistsFailure {
  type: typeof types.PLAYLISTS_LIST_FAILURE;
  error: string;
}
const listPlaylistsFailure = (error: string): IListPlaylistsFailure => ({
  error,
  type: types.PLAYLISTS_LIST_FAILURE,
});

export type PlaylistAction =
  | IListPlaylistsBegin
  | IListPlaylistsSuccess
  | IListPlaylistsFailure;

export {
  listPlaylistsAppend,
  listPlaylistsBegin,
  listPlaylistsSuccess,
  listPlaylistsFailure,
};
