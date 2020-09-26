import axios from 'axios';

export const MOCKY_API = axios.create({
	baseURL: 'http://www.mocky.io/v2',
});

export const SPOTIFY_API = axios.create({
	baseURL: 'https://api.spotify.com/v1',
});