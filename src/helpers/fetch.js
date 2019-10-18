import fetch from 'unfetch';

const constructRequest = async (url, options) => {
  const result = await fetch(url, options);
  const json = result.json();
  return json;
}

export default constructRequest;

