import config from "../../config";

export default function useSpotifyAccountUrl(): string {
  const { spotifyClientId, spotifyAccountUrl, spotifyRedirectUrl } = config;

  const queryStringUrl = `client_id=${ spotifyClientId }&response_type=code&redirect_uri=${ spotifyRedirectUrl }`;

  return `${ spotifyAccountUrl }/authorize?${ queryStringUrl }`;
}
