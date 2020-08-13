export function extractAccessToken(urlHash: string) {
  const [token] = urlHash.split('&')
  return token.replace('#access_token=', '')
}