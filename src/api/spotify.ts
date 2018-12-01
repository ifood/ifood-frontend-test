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
  countryCode?: string | null,
  limit?: number,
  offset?: number,
): Promise<IPaging> {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    params: {
      ...(countryCode && { country: countryCode }),
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
  // not useful when searching playlists by the docs https://developer.spotify.com/documentation/web-api/reference/search/search/
  // countryCode?: string | null,
  limit?: number,
  offset?: number,
): Promise<IPaging> {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    params: {
      market: 'from_token', // the country comes from the access token
      q: search,
      type: 'playlist',
      ...(limit && { limit }),
      ...(offset && { offset }),
    },
    url: urljoin(settings.spotifyApiUrl, 'search'),
  }).then(response => response.data.playlists);
}

export { getFeaturedPlaylists, getPage, searchPlaylists };
