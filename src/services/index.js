import axios from 'axios'

export const getFormFields = () =>
  axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')

export const getPlaylists = params =>
  axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776', params)
