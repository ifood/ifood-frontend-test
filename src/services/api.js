import axios from 'axios'
import { getUserToken } from './auth'

const apiInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiInstance.interceptors.request.use(
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

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.pathname = '/'
    }
  }
)

export default apiInstance
