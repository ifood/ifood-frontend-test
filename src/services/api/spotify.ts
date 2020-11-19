export default class SportifyService {
  static getURL(): string {
    const {
      REACT_APP_SPOTIFY_CLIENT_ID,
      REACT_APP_SPOTIFY_AUTHORIZE_URL,
      REACT_APP_SPOTIFY_REDIRECT_URI,
    } = process.env;
    const scopes = 'user-read-email';
    const URL = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
      scopes,
    )}&redirect_uri=${encodeURIComponent(
      REACT_APP_SPOTIFY_REDIRECT_URI as string,
    )}&response_type=token`;
    return URL;
  }
}
