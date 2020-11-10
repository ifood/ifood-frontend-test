import axios from "./axios";
import queryString from "query-string";
import {
  CLIENT_ID,
  BASE_SPOTIFY_AUTH_URL,
  BASE_SPOTIFY_API_URL,
} from "../constants";

export const authorize = () => {
  const port = window.location.port ? `:${window.location.port}` : "";
  const callbackURI = `${window.location.protocol}//${window.location.hostname}${port}/callback`;
  console.log(callbackURI);
  const queryParams = queryString.stringify({
    client_id: CLIENT_ID,
    response_type: "token",
    redirect_uri: callbackURI,
    show_dialog: true,
    scope:
      "user-read-email playlist-modify-public user-modify-playback-state user-read-recently-played user-read-private playlist-read-private playlist-read-collaborative user-follow-read user-library-read user-top-read",
  });

  const requestURL = `${BASE_SPOTIFY_AUTH_URL}/authorize?${queryParams}`;
  window.location.href = requestURL;
};

export const getPlaylists = ({
  country,
  locale,
  timestamp,
  limit,
  offset,
} = {}) =>
  axios.get(`${BASE_SPOTIFY_API_URL}/v1/browse/featured-playlists`, {
    params: {
      country,
      locale,
      timestamp,
      limit,
      offset,
    },
  });

export const getPlaylistDetails = (id, params) =>
  axios.get(`${BASE_SPOTIFY_API_URL}/v1/playlists/${id}`, {
    params,
  });

export const getPlaylistTracks = (id, params) =>
  axios.get(`${BASE_SPOTIFY_API_URL}/v1/playlists/${id}/tracks`, {
    params,
  });

export const getFilters = () =>
  axios.get("https://www.mocky.io/v2/5a25fade2e0000213aa90776");
