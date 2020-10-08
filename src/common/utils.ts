export function authorizeSpotifyUrl(clientId: string | undefined): string {
  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${process.env.REACT_APP_BASE_API}${process.env.REACT_APP_REDIRECT_AUTHORIZED_URL}`;
}
