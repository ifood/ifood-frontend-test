import axios from 'axios'

const SpotifyAccount = (prefix) => {
  return axios.create({
    baseURL: `https://${prefix}.spotify.com/`,
    headers: {
      Authorization: 'Basic YTM4ZDZmMGE5MDcxNDZmZTg2ZjhmMDQxYmM1MTViM2E6ZjM2YTJhYjA2ZjJjNGE5NWFhNDVhZjI2MzI5NTk5OGU='
    }
  })
}

export default SpotifyAccount
