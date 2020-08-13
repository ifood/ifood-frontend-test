export function convertObjectParamsToString(params: object) {
  const searchParams = new URLSearchParams()

  for (const key in params) {
    searchParams.append(key, params[key])
  }

  return searchParams.toString()
}