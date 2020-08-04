import axios from 'axios'

const FiltersApi = axios.create({
  baseURL: 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
})

export default FiltersApi
