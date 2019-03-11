import axios from "axios";

import constantes from '../constantes';
import moment from 'moment';

function getFeaturedPlaylists(filters) {

    const token = localStorage.getItem('token');
    filters.timestamp = moment().format();
    return axios({
        method: "get",
        url: `${constantes.SPOTIFY_URL_FEATURED_PLAYLISTS}`,
        params: filters,
        headers: {
             'Authorization': `Bearer ${token}`
        }
    });
}

export default {
    getFeaturedPlaylists: getFeaturedPlaylists
};