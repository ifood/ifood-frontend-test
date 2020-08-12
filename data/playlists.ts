const secretToken = '3b0fa2d640414630b38e2198a9060422'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'
export async function fetchPlaylists(filter: PlaylistFilter): Promise<any> {
  const response = await fetch(url, { headers: { Authorization: 'Bearer ' + secretToken } })
  const json = await response.json()
  return json.playlists?.items
}

export function addQueryParamsToURL(filter: PlaylistFilter) {
  const params = new URLSearchParams()

  for (const key in filter) {
    params.append(key, filter[key])
  }

  return new URL('https://example.com?' + params.toString()).toString()
}

type PlaylistFilter = {
  locale?: string
  country?: string
  timestamp?: string
  limit?: number
  offset?: number
}