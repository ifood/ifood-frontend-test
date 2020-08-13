import { fetchURL } from './fetchURL'
import { convertObjectParamsToString } from '../utils/queryParams'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'

export async function fetchFeaturedPlaylists(accessToken: string, filters: FilterWithTimestamp): Promise<[string, Playlist[]]> {
  const queryParams = convertObjectParamsToString(filters)
  const json = await fetchURL(url + queryParams, { headers: { Authorization: 'Bearer ' + accessToken } })
  return [json.message, json.playlists?.items]
}
