import axios from 'axios'

const SpotifyApi = () => {
  const accessToken = sessionStorage.getItem('accessToken')

  return axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Authorization: `${accessToken}` // 'Bearer BQBYsNhJgha48qeubsVZ8Tq4HAl9XWCWDc9sMv01T-aYdha7aWrKu5Z-fhWzzvmJZ7fSypQhlx2aMhH9o25ctFqVhDKOVVJcNdWcA9uzGLw-SBJRdmMRiLVKM5bfoduEmVUKFDGcozmtPDQylYgC8vpvISkMKJ40ofeW72zCrPwW3rsdo12nhS5p6hCPTaWB8qBW9VyCsTY6N9YZQXzqU9-2mzc7_IwNVK03MYZkc6rUtYMDnE3gFFm4AC2Lo8Sjf4oo6bf1BG2SF-lC17O383WkwCyF2Ljg0AQB'
    }
  })
}

export default SpotifyApi
