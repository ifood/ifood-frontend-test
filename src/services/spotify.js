import axios from "axios";

const clientId = "1384b3b093e14987b0ed150cc17fcb78";
const clientSecret = "0d37d6099c274f3aa24c97977794f777";
const FEATURED_PLAYLISTS_API =
  "https://api.spotify.com/v1/browse/featured-playlists";

let token = {};

const getToken = async () => {
  if (isExpired()) {
    const newToken = await updateToken();
    const expiresDate = new Date();
    const minutes = Math.floor(newToken.expires_in / 60);
    expiresDate.setMinutes(expiresDate.getMinutes() + minutes);

    token = { ...newToken, expiresDate };
  }
  return token;
};

const isExpired = () =>
  token.expiresDate === undefined || token.expiresDate <= new Date();

const updateToken = async () => {
  const result = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
    }
  );
  return result.data;
};

const getQuery = (filters) => {
  const esc = encodeURIComponent;
  let query = [];

  for (let filter in filters) {
    if (filters[filter] !== "") {
      query.push(esc(filter) + "=" + esc(filters[filter]));
    }
  }

  return query.length ? `?${query.join("&")}` : "";
};

export const getFeaturePlaylists = async (filters) => {
  const { access_token } = await getToken();
  const query = getQuery(filters);

  return axios.get(`${FEATURED_PLAYLISTS_API}${query}`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });

  // return result.data;
};
