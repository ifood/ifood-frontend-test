import axios from 'axios'

export const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'

export const getFormFilters = () => axios.get(url)
