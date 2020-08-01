import axios from 'axios'
import { getUserToken } from './auth.service'

export const apiInstanceSpotify = axios.create({
  baseURL: 'https://api.spotify.com/va1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const apiInstanceMocky = axios.create({
  baseURL: 'https://www.mocky.io/v2/5a25fade2e0000213aa90776',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiInstanceSpotify.interceptors.request.use(
  (config) => {
    const configWithAuthorization = config
    const token = getUserToken()

    if (token) {
      configWithAuthorization.headers.Authorization = `Bearer ${token}`
    }

    return configWithAuthorization
  },
  (error) => {
    console.log(error)
  }
)

apiInstanceSpotify.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.pathname = '/'
    }
  }
)
