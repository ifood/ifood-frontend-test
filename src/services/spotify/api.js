import axios from 'axios'

const SpotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: 'Put your token of spotify here'
  }
})

export default SpotifyApi
