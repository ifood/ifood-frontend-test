import { fetchURL } from './fetchURL'
import { convertObjectParamsToString } from '../utils/queryParams'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'

export async function fetchFeaturedPlaylists(accessToken: string, filters: any): Promise<[string, Playlist[]]> {
  const queryParams = convertObjectParamsToString(filters)
  const json = await fetchURL(url + queryParams, { headers: { Authorization: 'Bearer ' + accessToken } })
  return [json.message, json.playlists?.items]
}

export type Playlist = {
  id: string
  images: { url: string }[]
  external_urls: { spotify: string }
  name: string
  description: string
}
