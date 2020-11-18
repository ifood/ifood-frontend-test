 
import axios from 'axios';

const API_FILTERS_DATA_ENDPOINT = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
const SPOTIFY_FEATURED_PLAYLISTS_URL = 'https://api.spotify.com/v1/browse/featured-playlists';

export const getApiFiltersData = async () =>{
    return await axios(API_FILTERS_DATA_ENDPOINT);
};

export const getSpotifyFeaturedPlaylists = async(params, token) => {
    console.log(token);
    console.log(params);
    const response = await axios.get(SPOTIFY_FEATURED_PLAYLISTS_URL, {
        headers: { Authorization: `Bearer ${token}`},
        params: params
    });

    console.log(response.data);
    return response.data.playlists;
}