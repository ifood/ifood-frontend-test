import getToken from './token';

const options = (token) => ({
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer ${token}`
  }),
});

const getPlaylists = async (params) => {
  const token = await getToken();
  setInterval(() => token, 30000);

  const {
    country,
    locale,
    timestamp,
    limit,
    offset
  } = params;

  const hasCountryParams = country && `country=${country}`;
  const hasLocaleParams = locale && `locale=${locale}`;
  const hasTimestampParams = timestamp && `timestamp=${timestamp}`
  const hasLimitParams = limit && `limit=${limit}`;
  const hasOffsetParams = limit && `offest=${offset}`

  const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?${hasCountryParams}&${hasLocaleParams}&${hasTimestampParams}&${hasLimitParams}&${hasOffsetParams}`, options(token));
  const result = await response.json();

  return result;
};

export default getPlaylists;
