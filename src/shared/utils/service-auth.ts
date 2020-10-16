import { client } from './api'

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || ''
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || ''

const ME_ENDPOINT = '/api/me'
const AUTHORISE_CODE_ENDPOINT = '/api/authorise-code'
const PLAYLIST_ENDPOINT = '/api/feature-playlist'

type AuthoriseCodeResponse = {
  accessToken: string
  authCode: string
  accessTokenRefreshedAt: string
  refreshToken: string
  loggedInAt: string
}

export const getStoredAuthUser = () => window.localStorage.getItem('user')

export const storeAuthUser = (user: {}) =>
  window.localStorage.setItem('user', JSON.stringify(user))

export const removeStoredAuthUser = () => window.localStorage.removeItem('user')

export function getCodeSpotify(): void {
  const spotifyRedirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}`

  window.location.replace(spotifyRedirect)
}

export function getAcessToken() {
  return JSON.parse(getStoredAuthUser() || '')?.accessToken
}

export async function authoriseUserCode(
  userCode: string
): Promise<AuthoriseCodeResponse | undefined> {
  try {
    const res = await client(`${AUTHORISE_CODE_ENDPOINT}?authCode=${userCode}`)
    const data = {
      accessToken: res.access_token,
      authCode: userCode as string,
      accessTokenRefreshedAt: new Date().toISOString(),
      refreshToken: res.refresh_token,
      loggedInAt: new Date().toISOString()
    }

    storeAuthUser(data)

    return data as AuthoriseCodeResponse
  } catch (error) {
    console.log('Error : ', error)
  }
}

export async function getUser(token: string) {
  try {
    const res = await client(`${ME_ENDPOINT}?token=${token}`)
    return res
  } catch (error) {
    console.log('Error: ', error)
  }
}

export async function playlist(_: string, token: any, data: any) {
  try {
    const res = await client(`${PLAYLIST_ENDPOINT}?token=${token}&${data}`)
    return res
  } catch (error) {
    console.log('Error: ', error)
    throw new Error('Não foi possivel carregar a playlist')
  }
}

export async function authoriseApplication(userCode: string) {
  try {
    const authorise = await authoriseUserCode(userCode)
    let user
    if (authorise) {
      user = await getUser(authorise.accessToken)
    }

    return user
  } catch (error) {
    console.log('Error: ', error)
    throw new Error('Não foi possivel autenticar na Aplicação ')
  }
}
