import axios from 'axios'

const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
})

const filterApi = axios.create({
  baseURL: process.env.REACT_APP_FILTER_API_URL,
})

export { spotifyApi, filterApi }

export default spotifyApi
