const baseAuthorizeURL = 'https://accounts.spotify.com/authorize'
const clientId = '3b0fa2d640414630b38e2198a9060422'
const redirectURI = 'http://localhost:3000/featured-playlists'
const authorizeURL = `${baseAuthorizeURL}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}`

export function LoginSpotify() {
  return (
    <a href={authorizeURL}>Faça login no Spotify para acessar o Spotifood</a>
  )
}
