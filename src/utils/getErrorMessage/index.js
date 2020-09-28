import { genericError, unauthorizedError, unauthorized } from 'constant'

const getErrorMessage = (error) => {
  if (unauthorized.includes(error?.response?.status)) {
    return unauthorizedError
  }
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message
  }
  return genericError
}

export default getErrorMessage
