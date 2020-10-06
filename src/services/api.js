import axios from 'axios';

const mockyApi = axios.create({
  baseURL: process.env.REACT_APP_MOCKY_API
});

const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API
});

export { mockyApi, spotifyApi };
