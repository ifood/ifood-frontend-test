'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info';

class GenericErrorHandler {
	static handle(error, reqId, res) {
		let status = 500;
		let messages = ['Sistema indisponível'];

		if (error.response && error.response.data) {
			const data = error.response.data;
			status = error.response.status;
			if (data.message) {
				messages = [error.response.data.message];
			} else if (data.errors) {
				messages = error.response.data.errors.map(err => {
					return err.message;
				});
			} else if (data.responses) {
				messages = error.response.data.responses.map(err => {
					return err.message;
				});
			}
		}

		logger.error(`req.id=${reqId}, status=${status}, Error=${error}`);
		res.status(status).send({ message: messages });
	}
}

module.exports = GenericErrorHandler;
