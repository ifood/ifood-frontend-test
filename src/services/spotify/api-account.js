import axios from 'axios'
import env from './../../env'

const SpotifyAccount = (prefix) => {
  // Convert keys for base64
  const authorization = `Basic ${btoa(`${env.CLIENT_ID}:${env.CLIENT_SECRET}`)}`

  return axios.create({
    baseURL: `https://${prefix}.spotify.com/`,
    headers: {
      Authorization: authorization
    }
  })
}

export default SpotifyAccount
