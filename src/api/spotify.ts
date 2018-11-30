import axios from 'axios';
import urljoin from 'url-join';
import settings from '../settings';

export interface IPlaylist {
  id: string;
  images: Array<{ height: number; url: string; width: number }>;
  href: string;
  name: string;
}

export interface IPaging {
  href: string;
  items: IPlaylist[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

async function getFeaturedPlaylists(
  token: string,
  countryCode?: string,
  limit?: number,
  offset?: number,
): Promise<IPaging> {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    params: {
      ...(countryCode && { market: countryCode }),
      ...(limit && { limit }),
      ...(offset && { offset }),
    },
    url: urljoin(settings.spotifyApiUrl, 'browse/featured-playlists'),
  }).then(response => response.data.playlists);
}

async function getPage(token: string, pageAddress: string): Promise<IPaging> {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    url: pageAddress,
  }).then(response => response.data.playlists);
}

async function searchPlaylists(
  token: string,
  search: string,
  countryCode?: string,
  limit?: number,
  offset?: number,
): Promise<IPaging> {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    params: {
      q: search,
      type: 'playlist',
      ...(countryCode && { market: countryCode }),
      ...(limit && { limit }),
      ...(offset && { offset }),
    },
    url: urljoin(settings.spotifyApiUrl, 'search'),
  }).then(response => response.data.playlists);
}

export { getFeaturedPlaylists, getPage, searchPlaylists };
