import useSWR from 'swr';
import { spotifyApi } from './api';
import { PlaylistInterface } from '../interfaces/playlist.interface';

export interface PlaylistResponse {
  message: string;
  playlists: { items: PlaylistInterface[] };
}

type fetcherParams = {
  limit: number;
};

type Service = {
  key: string;
  fetcher: (params: fetcherParams) => Promise<PlaylistResponse>;
};

export function useService(service?: Service) {
  return useSWR(service?.key, service?.fetcher, {
    refreshInterval: 30000,
  });
}

async function fetcher(
  url: string,
  params?: fetcherParams,
): Promise<PlaylistResponse> {
  try {
    const response = await spotifyApi(url, {
      method: 'GET',
      params,
    });

    if (response.data.status >= 400 && response.data.status < 600) {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (e) {
    throw new Error(e.response?.data?.message ?? e.message);
  }
}

export const playlistService = {
  featuredPlaylists(params: fetcherParams): Service {
    return {
      key: '/browse/featured-playlists',
      fetcher: () => fetcher('/browse/featured-playlists', params),
    };
  },
};
