export const setSession = session => {
  window.localStorage.setItem('access_token', session.access_token)
  window.localStorage.setItem('expires_in', session.expires_in)
}

export const getSession = () => {
  const session = {
    access_token: window.localStorage.getItem('access_token') || null,
    expires_in: parseInt(window.localStorage.getItem('expires_in'), 10) || null
  }

  return session
}

export const isValidSession = () => {
  const session = getSession()
  return session.access_token && session.expires_in
}

export const clearSession = () => {
  window.localStorage.removeItem('access_token')
  window.localStorage.removeItem('expires_in')
}

export const decodeSession = (hash = '') => {
  const session = hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const params = initial

      if (item) {
        const parts = item.split('=')
        params[parts[0]] = decodeURIComponent(parts[1])
      }

      return params
    }, {})

  return session
}
