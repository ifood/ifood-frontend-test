const unauthorized = [401, 403]

const filterParam = '5a25fade2e0000213aa90776'

const refreshDelay = 30000 // 30 seconds

const unauthorizedError =
  'Your token is invalid, we will try to refresh it for you.'
const genericError = 'Oops! Something went wrong.'

export {
  unauthorized,
  filterParam,
  refreshDelay,
  genericError,
  unauthorizedError,
}
