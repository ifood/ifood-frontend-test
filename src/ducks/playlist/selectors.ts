import { IStoreState } from '../store';

export const getCancellationToken = (state: IStoreState) =>
  state.playlist.cancelToken;
export const getError = (state: IStoreState) => state.playlist.error;
export const getPlaylists = (state: IStoreState) => state.playlist.list;
export const getLimit = (state: IStoreState) => state.playlist.limit;
export const getOffset = (state: IStoreState) => state.playlist.offset;
export const getNextPage = (state: IStoreState) => state.playlist.nextPageUrl;
export const getPreviousPage = (state: IStoreState) =>
  state.playlist.previousPageUrl;
