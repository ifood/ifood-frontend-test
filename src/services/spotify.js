const {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_REDIRECT_URI,
} = process.env;

export const getSpotifyURL = () => {
  const scopes = 'user-read-email';
  return `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scopes,
  )}&redirect_uri=${encodeURIComponent(
    REACT_APP_SPOTIFY_REDIRECT_URI,
  )}&response_type=token`;
};
