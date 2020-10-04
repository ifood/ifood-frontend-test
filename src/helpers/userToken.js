import queryString from "query-string";

const userToken = () => {
  const urlHash = queryString.parse(window.location.hash);
  const token = urlHash.access_token;

  const checkToken = () => {
    if (token) {
      return true;
    }

    return false;
  };

  const getToken = () => {
    return token;
  };

  return {
    checkToken,
    getToken,
  };
};

export default userToken;
