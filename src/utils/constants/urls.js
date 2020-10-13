import { clientID, scopes, redirect_url } from "utils/constants/constants";

const BASE = "";

const urls = {
  ROUTES: {
    app: {
      path: `${BASE}/`,
    },
  },
  LINKS: {
    authorization: `https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=code&redirect_uri=${redirect_url}&scope=${scopes}`,
  },
};

export default urls;
