'use strict';

const SpotifyHttpClient = require('../httpClient');

class SpotifyService {
	async authorize(query) {
		return await SpotifyHttpClient.authorize(query);
	}

	async featuredPlaylist(accessToken, query) {
		try {
			let params = '?';
			for (let prop in query) {
				params += `${prop}=${query[prop]}&`;
			}

			return await SpotifyHttpClient.featuredPlaylist(accessToken, params);
		} catch (error) {
			throw error;
		}
	}
}

module.exports = new SpotifyService();
