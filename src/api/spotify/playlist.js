import axios from 'axios'
import { getTokenFromLocalStorage } from './auth'
import { buildParams } from './helpers'

export async function fetchPlaylists(filters) {
  const token =  getTokenFromLocalStorage()
  const params = buildParams(filters)

  const playlists = await axios.get(`${process.env.REACT_APP_API_SPOTIFY_URL}/v1/browse/featured-playlists${params}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return playlists.data
}
