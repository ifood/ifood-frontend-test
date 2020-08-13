import { fetchURL } from './fetchURL'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'

export async function fetchPlaylists(accessToken: string): Promise<any> {
  const json = await fetchURL(url, { headers: { Authorization: 'Bearer ' + accessToken } })
  return json.playlists?.items
}
