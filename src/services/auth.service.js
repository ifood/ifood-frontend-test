import Cookies from 'js-cookie'

const TOKEN_KEY = 'USER_TOKEN'

export const setUserToken = (token) => Cookies.set(TOKEN_KEY, token)

export const getUserToken = () => Cookies.get(TOKEN_KEY)

export const deleteUserToken = () => Cookies.remove(TOKEN_KEY)
