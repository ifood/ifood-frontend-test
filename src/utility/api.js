/**
 * IMPORTS
 */
import axios from 'axios';


/**
 * CODE
 */
const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
});

const token = localStorage.getItem('access_token');
const type = localStorage.getItem('token_type');

const spotifyApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {'Authorization': type + ' ' + token}
});


/**
 * EXPORTS
 */
export {
    api,
    spotifyApi};
