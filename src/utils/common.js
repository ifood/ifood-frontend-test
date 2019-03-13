export const SPOTIFY_CLIENT_ID = '7c5fe4dfc3a54a7c8de840b112d6c0aa';

export const extractAccessTokenFromUrlHash = (callbackUrlHash) => {
  const splittedContent = callbackUrlHash.split('&');
  const accessToken = splittedContent[0].split('=')[1];
  return accessToken;
};

export const getHostname = () => window.location.hostname;
