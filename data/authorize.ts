const url = 'https://accounts.spotify.com/authorize'

export async function authorizeSpotify() {
  const response = await fetch(url)
  const json = await response.json()
  console.log({ json })
  return json
}

type AuthParams = {
  client_id: string
  response_type: 'token'
  redirect_uri: 'http://localhost:3000/'
}

export function addQueryParamsToURL(url: string, filter: AuthParams) {
  const params = new URLSearchParams()

  for (const key in filter) {
    params.append(key, filter[key])
  }

  return new URL(url + '?' + params.toString()).toString()
}