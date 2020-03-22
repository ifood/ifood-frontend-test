'use strict';

const SpotifyService = require('../service');
const GenericErrorHandler = require('../../utils/errors');

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info';

const redirUrlSuccess = 'http://localhost:8080/lista';
const redirUrlFail = 'http://localhost:8080/autenticar';

class SpotifyController {
	async authorize(req, res) {
		try {
			logger.info(
				`req.id=${req.correlationId()}, Class=SpotifyController, M=authorize`
			);
			const resp = await SpotifyService.authorize(req.query);

			req.session.access_token = resp.data.access_token;
			req.session.expires_in = resp.data.expires_in;

			logger.info(
				`req.id=${req.correlationId()}, class=SpotifyController, M=authorize, redirect=${redirUrlSuccess}`
			);
			res.redirect(redirUrlSuccess);
		} catch (error) {
			logger.error(
				`req.id=${req.correlationId()}, class=SpotifyController, M=authorize, redirect=${redirUrlFail}`
			);
			res.redirect(redirUrlFail);
		}
	}

	async featuredPlaylist(req, res) {
		try {
			logger.info(
				`req.id=${req.correlationId()}, class=SpotifyController, M=featuredPlaylist`
			);
			const resp = await SpotifyService.featuredPlaylist(
				req.session.access_token,
				req.query
			);

			res.json(resp.data.playlists.items);
		} catch (error) {
			GenericErrorHandler.handle(error, req.correlationId(), res);
		}
	}
}

module.exports = new SpotifyController();
