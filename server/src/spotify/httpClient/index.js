'use strict';

const axios = require('axios');

class SpotifyHttpClient {
	authorize() {
		const params = new URLSearchParams();
		params.set('grant_type', 'client_credentials');
		params.set(
			'scopes',
			'user-read-private user-read-email user-read-playback-state'
		);

		return axios.post('https://accounts.spotify.com/api/token', params, {
			headers: {
				Authorization: `Basic MmE5YTYwZjYzYWRmNDA1ZWEyM2VlOTRkNzNmYzQzOGE6NzE3NWI3Y2E3NzU3NDdlNWJiM2VjMzg1YTFlY2QzMmU=`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	}

	featuredPlaylist(accessToken, params) {
		return axios.get(
			`https://api.spotify.com/v1/browse/featured-playlists${params}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			}
		);
	}
}

module.exports = new SpotifyHttpClient();
