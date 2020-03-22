'use strict';

const FilterHttpClient = require('../httpClient');

class FilterService {
	async filter() {
		return await FilterHttpClient.filters();
	}
}

module.exports = new FilterService();
