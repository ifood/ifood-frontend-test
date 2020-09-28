const parserParams = (typeLocation = 'search') => {
  const params = window.location[typeLocation].substring(1).split('&');

  return params.reduce((initial, item) => {
    const result = initial;
    if (item) {
      const parts = item.split('=');
      result[parts[0]] = decodeURIComponent(parts[1]);
    }

    return result;
  }, {});
};

export const getHashParams = () => parserParams('hash');

export const getSearchParams = () => parserParams('search');
