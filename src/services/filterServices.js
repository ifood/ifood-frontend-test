import axios from 'axios';

const filterUrl = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

export const getFilters = () => axios.get(filterUrl);
