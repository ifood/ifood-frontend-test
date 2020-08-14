const baseAuthorizeURL = 'https://accounts.spotify.com/authorize'
const clientId = '3b0fa2d640414630b38e2198a9060422'
const devURL = 'http://localhost:3000/'
const prodURL = 'https://spotifood.douglasselias.vercel.app/'
const redirectURI = process.env.NODE_ENV === 'development' ? devURL : prodURL
const authorizeURL = `${baseAuthorizeURL}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}`

export function LoginSpotify() {
  return (
    <a href={authorizeURL}>
      Clique aqui para fazer login no Spotify e acessar o Spotifood
    </a>
  )
}
