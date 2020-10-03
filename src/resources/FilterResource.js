import Axios from 'axios';

export default class FilterResource {
  static basePath = 'https://www.mocky.io/v2';

  static resource = '5a25fade2e0000213aa90776';

  static fetchFilters() {
    return Axios.get(`${FilterResource.basePath}/${FilterResource.resource}`);
  }
}
