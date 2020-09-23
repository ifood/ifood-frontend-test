import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Playlist } from '../interfaces/playlist';

export interface FeaturedPlaylistsParams {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

interface FeaturedPlaylistsDTO {
  playlists: {
    items: {
      id: string;
      name: string;
      description: string;
      images: {
        url: string;
      }[];
      external_urls: {
        spotify: string;
      };
    }[];
  };
}

const fetchFeaturedPlaylists = async (params?: FeaturedPlaylistsParams): Promise<Playlist[]> => {
  const { data } = await api.get<FeaturedPlaylistsDTO>('browse/featured-playlists', { params });
  return data.playlists.items.map((playlist) => ({
    id: playlist.id,
    name: playlist.name,
    description: playlist.description,
    image: playlist.images[0].url,
    url: playlist.external_urls.spotify,
  }));
};

export const useFeaturedPlaylists = (params?: FeaturedPlaylistsParams) => {
  const { data: featuredPlaylists, isLoading, isSuccess, isError } = useQuery(
    ['featured-playlists', params],
    () => fetchFeaturedPlaylists(params)
  );
  return { featuredPlaylists, isLoading, isSuccess, isError };
};
