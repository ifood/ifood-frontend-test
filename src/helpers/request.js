const request = async (url, method) => {
  const result = await fetch(url, { method });
  const json = await result.json();
  return json;
}

export default request;

