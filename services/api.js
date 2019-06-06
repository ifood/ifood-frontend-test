import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

export const getUserData = ({ headers }) => api.get('/me', { headers: headers })

export const getPlaylist = ({ limit = 50, offset = 0, filter, headers }) =>
  api.get(
    `/browse/featured-playlists?${filter}&offset=${offset}&limit=${limit}`,
    { headers: headers },
  )
