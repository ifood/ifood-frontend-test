const ACCESSTOKEN = '@SpotifoodAccessToken'
const TOKENEXPIRED = '@SpotifoodTokenExpired'

const isAuthenticated = () => localStorage.getItem(ACCESSTOKEN) !== null

const getSetAccess = (data) => {
  localStorage.setItem(ACCESSTOKEN, data.access_token)
  localStorage.setItem(TOKENEXPIRED, data.expires_in)
}

const getToken = (data) => {
  return localStorage.getItem(data)
}

const destroyToken = () => {
  return (
    localStorage.removeItem(ACCESSTOKEN), localStorage.removeItem(TOKENEXPIRED)
  )
}

export {
  ACCESSTOKEN,
  TOKENEXPIRED,
  isAuthenticated,
  getSetAccess,
  getToken,
  destroyToken,
}
