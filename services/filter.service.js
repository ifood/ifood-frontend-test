import axios from 'axios';

const FILTERS_API = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

export default class SpotityService {
  static getFilters() {
    return axios.get(FILTERS_API);
  }
}
