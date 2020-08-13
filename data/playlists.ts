import { fetchURL } from './fetchURL'

const url = 'https://api.spotify.com/v1/browse/featured-playlists?'

export async function fetchFeaturedPlaylists(accessToken: string): Promise<Playlist[]> {
  const json = await fetchURL(url, { headers: { Authorization: 'Bearer ' + accessToken } })
  return json.playlists?.items
}

export type Playlist = {
  id: string
  images: { url: string }[]
  external_urls: { spotify: string }
  name: string
  description: string
}
