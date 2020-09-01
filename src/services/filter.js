import axios from "axios";

const FILTER_API = "http://www.mocky.io/v2/5a25fade2e0000213aa90776";

export const getFilters = async () => {
  const result = await axios.get(FILTER_API, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return result.data;
};
