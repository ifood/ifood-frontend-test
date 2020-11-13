import addSeconds from 'date-fns/addSeconds'
import formatISO from 'date-fns/formatISO'
import compareAsc from 'date-fns/compareAsc'
import { getTokenAPI } from '../api/playlist'

export const isTokenValid = () => {
  const tokenExpiration = localStorage.getItem('spotify_token_expiration')
  const token = localStorage.getItem('spotify_token')

  if (!tokenExpiration || !token) {
    return false
  }

  return compareAsc(new Date(tokenExpiration), new Date()) === 1
}

export const getNewToken = async () => {
  try {
    const { expires_in, access_token } = await getTokenAPI()

    const expireDate = addSeconds(new Date(), expires_in)

    localStorage.setItem('spotify_token_expiration', formatISO(expireDate))
    localStorage.setItem('spotify_token', access_token)

    return access_token
  } catch (e) {
    return e
  }
}

export const getToken = async () => {
  if (isTokenValid()) {
    return localStorage.getItem('spotify_token')
  }

  return getNewToken()
}
