const parserParams = () => {
  const params = window.location.hash.substring(1).split('&');

  return params.reduce((initial, item) => {
    const result = initial;
    if (item) {
      const parts = item.split('=');
      result[parts[0]] = decodeURIComponent(parts[1]);
    }

    return result;
  }, {});
};

export default parserParams;
