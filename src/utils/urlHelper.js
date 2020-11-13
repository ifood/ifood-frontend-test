import { forIn } from 'lodash'

export const createQueryParams = (filters) => {
  const params = []

  forIn(filters, (value, key) => {
    if (value !== '') {
      params.push(`${key}=${encodeURIComponent(value)}`)
    }
  })

  return params.length > 0 ? '?' + params.join('&') : ''
}
