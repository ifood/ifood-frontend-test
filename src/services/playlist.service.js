import { apiInstanceSpotify, apiInstanceMocky } from './api'

export const getFeaturedPlaylists = (
  country,
  timestamp,
  limit = 50,
  offset = 2,
  locale = 'PT_br'
) => {
  const params = {
    ...(locale ? { locale } : null),
    ...(country ? { country } : null),
    ...(timestamp ? { timestamp } : null),
    ...(limit ? { limit } : null),
    ...(offset ? { offset } : null)
  }

  return apiInstanceSpotify.get('/browse/featured-playlists', { params })
}

export const getChoicesForFilter = () => apiInstanceMocky.get()
