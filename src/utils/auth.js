import { getHashParams } from "utils/spotify";

export const getAuthItems = () => ({
  accessToken: sessionStorage.getItem("access_token"),
  expiresIn: sessionStorage.getItem("expires_in"),
  tokenType: sessionStorage.getItem("token_type"),
});

export const hasValidAccessToken = () => {
  const accessToken = sessionStorage.getItem("access_token");
  const expiresIn = sessionStorage.getItem("expires_in");

  return accessToken && expiresIn > 60; // TODO: calc timestamp instead of storing raw seconds
};

export const saveAuthItems = () => {
  const parsed = getHashParams();
  sessionStorage.setItem("access_token", parsed.access_token);
  sessionStorage.setItem("expires_in", parsed.expires_in); // TODO: calc timestamp instead of storing raw seconds
  sessionStorage.setItem("token_type", parsed.token_type);
};

export const cleanAuthItems = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("expires_in");
  sessionStorage.removeItem("token_type");
};
