import SpotifyApi from './api'
import SpotifyAccount from './api-account'
import * as QueryStringService from './../query-string'

import env from '../../env'

export const getFeturedPlaylist = async (searchies) => {
  const queryString = buildQueryString(searchies)

  try {
    const { data } = (await SpotifyApi().get(`/browse/featured-playlists?${queryString}`))
    return data
  } catch (err) {
    const { response } = err
    const { error } = response.data
    // if (error.status === 401) return accessTokenValidation(error.status)
    return { error }
  }
}

export const accessTokenValidation = async (status) => {
  let code = QueryStringService.getParam('code')

  if (!code) code = sessionStorage.getItem('code')

  if (!code) {
    _getAuthorize()
  } else {
    const accessToken = sessionStorage.getItem('accessToken')

    if (!accessToken || status === 401) {
      const data = await _getAccessToken()
      sessionStorage.setItem('accessToken', `${data.token_type} ${data.access_token}`)
      sessionStorage.setItem('code', code)
    }

    return true
  }

  return false
}

const _getAuthorize = () => {
  const uriEncoded = `${encodeURI(env.REDIRECT_URI)}`
  const uri = `https://accounts.spotify.com/authorize?response_type=${env.RESPONSE_TYPE}&redirect_uri=${uriEncoded}&client_id=${env.CLIENT_ID}&scope=${env.SCOPE}`
  window.location.href = uri
}

const _getAccessToken = async () => {
  // Get code with get authorize
  const code = sessionStorage.getItem('code')
  // Convert keys for base64
  // const authorization = `Basic ${btoa(env.CLIENT_ID)}:${btoa(env.CLIENT_SECRETE)}`
  // Convert uri to URL encoded
  const uriEncoded = `${encodeURI(env.REDIRECT_URI)}`

  const params = new URLSearchParams()
  params.append('code', code)
  params.append('grant_type', env.GRANT_TYPE)
  params.append('redirect_uri', uriEncoded)

  const { data } = (await SpotifyAccount('accounts').post('/api/token', params))
  return data
}

const buildQueryString = (searchies) => Object.entries(searchies).map(search => search.join('=')).join('&')
