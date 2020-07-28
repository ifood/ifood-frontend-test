import apiInstance from './api'

export const getFeaturedPlaylists = (
  country,
  timestamp,
  limit,
  offset,
  locale = 'PT_br'
) => {
  const params = {
    ...(locale ? { locale } : null),
    ...(country ? { country } : null),
    ...(timestamp ? { timestamp } : null),
    ...(limit ? { limit } : null),
    ...(offset ? { offset } : null)
  }

  return apiInstance.get('/browse/featured-playlists', { params })
}
