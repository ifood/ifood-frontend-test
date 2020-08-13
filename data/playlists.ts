import { fetchURL } from './fetchURL'
import { convertObjectParamsToString } from '../utils/queryParams'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'

export async function fetchFeaturedPlaylists(accessToken: string, filters: FilterWithTimestamp): Promise<[string, Playlist[]]> {
  const queryParams = convertObjectParamsToString(removeQueryProperty(filters))
  const json = await fetchURL(url + queryParams, { headers: { Authorization: 'Bearer ' + accessToken } })
  const filteredPlaylists = filterPlaylists(json.playlists?.items, filters.query)

  return [json.message, filteredPlaylists]
}

function removeQueryProperty(filters: FilterWithTimestamp) {
  const filterWithoutQuery = {}

  for (const key in filters) {
    if (key !== 'query') {
      filterWithoutQuery[key] = filters[key]
    }
  }

  return filterWithoutQuery
}

function filterPlaylists(playlists: Playlist[], query: string): Playlist[] {
  return (playlists || []).filter((playlist: Playlist) => {
    const lowerCaseName = playlist.name.toLowerCase()
    const lowerCaseQuery = (query || '').toLowerCase()
    return lowerCaseName.includes(lowerCaseQuery)
  })
}