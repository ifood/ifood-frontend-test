import axios from 'axios'

export async function fetchFilters() {
  return  axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
}
