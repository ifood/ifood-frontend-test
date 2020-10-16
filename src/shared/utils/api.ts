import fetch from 'isomorphic-fetch'
import { removeStoredAuthUser } from 'shared/utils/service-auth'

const API_URL = process.env.REACT_APP_API_URL

async function client(endpoint: string) {
  return fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (response: { status: number; json: () => any; ok: any }) => {
    if (response.status === 401) {
      removeStoredAuthUser()
      const location = (window.location as unknown) as string
      window.location.assign(location)
      return Promise.reject({ message: 'Please re-authenticate.' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export { client }
