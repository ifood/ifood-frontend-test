import config from "../../config";

export default function useSpotifyAccountUrl(): string {
  const { spotifyClientId, spotifyAccountUrl } = config;

  const { origin, pathname } = window.location;

  const redirectUri = `${ origin }${ pathname }`;
  const queryStringUrl = `client_id=${ spotifyClientId }&response_type=code&redirect_uri=${ redirectUri }`;

  return `${ spotifyAccountUrl }/authorize?${ queryStringUrl }`;
}
