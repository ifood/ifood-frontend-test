import useSWR from 'swr';
import { spotifyApi, mockyApi } from './api';
import { PlaylistInterface } from '../interfaces/playlist.interface';

export interface PlaylistResponse {
  message: string;
  playlists: { items: PlaylistInterface[] };
}

type fetcherParams = {
  limit?: number;
};

type Service = {
  key: string;
  fetcher: (params: fetcherParams) => Promise<PlaylistResponse>;
};

export const getFeaturedPlaylists = (params: fetcherParams) => {
  return spotifyApi.get('/browse/featured-playlists', { params });
};

export const getChoicesForFilter = () => mockyApi.get('/');
