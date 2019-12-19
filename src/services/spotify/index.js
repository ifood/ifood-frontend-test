import axios from 'axios'
import { getSession, clearSession } from '../../utils/session'

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse/',
  timeout: 60000
})

instance.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    clearSession()
    window.location.reload()
  }

  return Promise.reject(error)
})

export const getPlaylists = params =>
  instance.get('/featured-playlists', {
    params,
    headers: {
      Authorization: `Bearer ${getSession().access_token}`
    }
  })

export function login() {
  function getLoginURL(scopes) {
    return `https://accounts.spotify.com/authorize?client_id=${
      process.env.CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
      process.env.REDIRECT_URI
    )}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`
  }

  const url = getLoginURL(['user-read-email'])

  window.open(
    url,
    '_self',
    `menubar=no,location=no,resizable=no,scrollbars=no,status=no`
  )
}
