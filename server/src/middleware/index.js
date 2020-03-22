'use strict';

const axios = require('axios');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info';

const GenericErrorHandler = require('../utils/errors');

module.exports = () => async (req, res, next) => {
	try {
		const params = new URLSearchParams();
		params.set('grant_type', 'client_credentials');
		params.set(
			'scopes',
			'user-read-private user-read-email user-read-playback-state'
		);

		const resp = await axios.post('https://accounts.spotify.com/api/token', params, {
			headers: {
				Authorization: `Basic MmE5YTYwZjYzYWRmNDA1ZWEyM2VlOTRkNzNmYzQzOGE6NzE3NWI3Y2E3NzU3NDdlNWJiM2VjMzg1YTFlY2QzMmU=`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		logger.info(`req.id=${req.correlationId()}, middleware=Spotify`);

		req.session.access_token = resp.data.access_token;
		req.session.expires_in = resp.data.expires_in;
		return next();
	} catch (error) {
		GenericErrorHandler.handle(error, req.correlationId(), res);
	}
};
