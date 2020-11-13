import axios from 'axios'

const baseURL = 'https://www.mocky.io/v2/5a25fade2e0000213aa90776'

export const getFilterAPI = () => axios.get(baseURL)
