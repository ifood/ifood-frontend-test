'use strict';

const FilterService = require('../service');
const GenericErrorHandler = require('../../utils/errors');

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info';

class FilterController {
	async filter(req, res) {
		try {
			logger.info(
				`req.id=${req.correlationId()}, class=FilterController, M=filter`
			);
			const { data } = await FilterService.filter();

			logger.info(
				`req.id=${req.correlationId()}, class=FilterController, M=filter, data=${JSON.stringify(
					data
				)}`
			);

			res.json(data);
		} catch (error) {
			GenericErrorHandler.handle(error, req.correlationId(), res);
		}
	}
}

module.exports = new FilterController();
