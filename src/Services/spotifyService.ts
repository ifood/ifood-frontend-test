import axios from 'axios';

import applyMask from '../Utils/applyMask';

export interface IFilterQuery {
  locale?: string;
  country?: string;
  timestamp?: Date | null;
  limit?: string;
  offset?: string;
}

export interface IPlaylistItem {
  description: string;
  external_urls: {
    spotify: string;
  };
  images: IPlaylistItemImage[];
  id: string;
  name: string;
}

interface IPlaylistItemImage {
  url: string;
}

interface IQueryParams {
  [key: string]: string;
}

export const getFeaturePlaylists = async (
  token: string,
  filter?: IFilterQuery,
): Promise<IPlaylistItem[]> => {
  const params = {} as IQueryParams;

  if (filter?.locale) {
    params.locale = filter.locale;
  }
  if (filter?.country) {
    params.country = filter.country;
  }
  if (filter?.timestamp) {
    params.timestamp = filter.timestamp.toISOString();
  }
  if (filter?.limit) {
    params.limit = filter.limit;
  }
  if (filter?.offset) {
    params.offset = filter.offset;
  }

  const response = await axios.get(
    'https://api.spotify.com/v1/browse/featured-playlists',
    {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const { items } = response.data.playlists;

  return items.map((item: IPlaylistItem) => ({
    ...item,
    description: applyMask(item.description),
  }));
};
