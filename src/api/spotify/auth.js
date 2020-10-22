
import axios from 'axios'

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_ACCOUNTS_SPOTIFY_URL } = process.env

const clientAccess = btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`)

const headers = {
  Authorization: `Basic ${clientAccess}`,
  ContentType: 'application/x-www-form-urlencoded'
}

export async function fetchTokenToLocalStorage () {
  const {data} = await axios.post(`${REACT_APP_ACCOUNTS_SPOTIFY_URL}/api/token`,
    'grant_type=client_credentials'
  , { headers} )

  localStorage.setItem('spotify_token',data.access_token)
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem('spotify_token')
  return token || ''
}
