import axios from 'axios';

const headers = {
    'Authorization': 'Bearer @ToDo: Insert OAuth Token'
};

const getPlaylist = async (parameters = '') => (
    (await axios.get(
        `https://api.spotify.com/v1/browse/featured-playlists` + parameters, { headers: headers }
    )).data
);

export {
    getPlaylist,
} 
