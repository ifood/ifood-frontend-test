import SpotifyApi from './api'

export const getFeturedPlaylist = async (searchies) => {
  const queryString = buildQueryString(searchies)

  return (await SpotifyApi.get(`/browse/featured-playlists?${queryString}`)).data
}

const buildQueryString = (searchies) => Object.entries(searchies).flatMap(search => search.join('=')).join('&')
