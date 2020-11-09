export const hasValidAccessToken = () => {
  const accessToken = sessionStorage.getItem("access_token");
  const expiresIn = sessionStorage.getItem("expires_in");

  return accessToken && expiresIn > 60;
};
