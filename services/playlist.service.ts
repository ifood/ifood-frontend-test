import useSWR from 'swr';
import { spotifyApi } from './api';

export function useService(service) {
  return useSWR(service.key, service.fetcher, {
    refreshInterval: 0,
  });
}

type fetcherParams = {
  limit: number;
};

async function fetcher(url: string, params?: fetcherParams): Promise<any> {
  try {
    const response = await spotifyApi(url, {
      method: 'GET',
      params,
    });

    if (response.data.status >= 400 && response.data.status < 600) {
      throw new Error(response.data.message);
    }

    return response;
  } catch (e) {
    throw new Error(e.response?.data?.message ?? e.message);
  }
}

type Service = {
  key: string;
  fetcher: (...args: any) => Promise<any>;
};

export const playlistService = {
  featuredPlaylists(params: fetcherParams): Service {
    return {
      key: '/browse/featured-playlists',
      fetcher: () => fetcher('/browse/featured-playlists', params),
    };
  },
};
