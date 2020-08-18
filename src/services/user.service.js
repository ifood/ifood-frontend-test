import { apiInstanceSpotify } from './api'

export const getUserDetails = () => apiInstanceSpotify.get('/me')
