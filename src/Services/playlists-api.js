import axios from 'axios'

const playlistsApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/browse/featured-playlists',
});

export default playlistsApi;