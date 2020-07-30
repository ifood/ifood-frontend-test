import { apiInstanceSpotify, apiInstanceMocky } from './api'

export const getFeaturedPlaylists = (params) => {
  return apiInstanceSpotify.get('/browse/featured-playlists', { params })
}

export const getChoicesForFilter = () => apiInstanceMocky.get()
