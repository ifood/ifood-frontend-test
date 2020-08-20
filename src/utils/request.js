import axios from 'axios'
import hashes from './getTokenFromHash'

const REQUEST_TIMEOUT = 30000

/* istanbul ignore next */
export default function request(url, options, withAuth = true) {
  const newOptions = {
    url,
    timeout: REQUEST_TIMEOUT,
    ...options,
  }

  if (withAuth) {
    newOptions.headers = {
      Authorization: `${hashes.token_type} ${hashes.access_token}`,
    }
  }

  return axios(newOptions).then((response) => response.data)
}
