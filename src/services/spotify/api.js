import axios from 'axios'

const SpotifyApi = () => {
  const accessToken = sessionStorage.getItem('accessToken')

  return axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Authorization: `${accessToken}`
    }
  })
}

export default SpotifyApi
