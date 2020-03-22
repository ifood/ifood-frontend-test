'use strict';

const axios = require('axios');

class FilterHttpClient {
	filters() {
		return axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
	}
}

module.exports = new FilterHttpClient();
