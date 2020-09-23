import axios from 'axios'

import { MOCKY, TOKENSERVER, CLIENTID, CLIENTSECRET } from '~/config'

import { isAuthenticated, getToken, ACCESSTOKEN, destroyToken } from './auth'

export const apiMocky = axios.create({
  baseURL: MOCKY,
})

export const apiAuth = axios.create({
  baseURL: TOKENSERVER,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + btoa(CLIENTID + ':' + CLIENTSECRET).toString('base64'),
  },
})

export const api = axios.create({
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getToken(ACCESSTOKEN)}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      destroyToken()
      window.location = '/'
    } else {
      return Promise.reject(error)
    }
  }
)

export default api
