import axios from 'axios'

import { refreshTokenRequest } from 'states/modules/session'

import { store } from 'states/store'
import { unauthorized } from 'constant'

const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
})

const filterApi = axios.create({
  baseURL: process.env.REACT_APP_FILTER_API_URL,
})

const refreshTokenApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_AUTH_URL,
})

spotifyApi.interceptors.response.use(
  (res) => res,
  (error) => {
    if (unauthorized.includes(error.response.status)) {
      store.dispatch(refreshTokenRequest()) // TODO: max requests, for case we have an invalid token
    }
    return Promise.reject(error)
  }
)

export { spotifyApi, filterApi, refreshTokenApi }

export default spotifyApi
