function parseBody(body) {
  return Object.keys(body)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`)
    .join('&');
}

async function createRequest({ method, url, body, headers }) {
  const client_id = '38165eb1c6e3421095c7e615c99d1899';
  const client_secret = '3cbc3c6c01fc453782f27dbefc40f05b';
  const authorizationHeaders = btoa(`${client_id}:${client_secret}`);
  const defaultHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${authorizationHeaders}`,
  };
  const fullHeaders = { ...defaultHeaders, ...headers };
  const fetchPromise = await fetch(url, {
    method,
    body: body && parseBody(body),
    headers: fullHeaders,
  });

  const result = await fetchPromise.json();

  if (!fetchPromise.ok) {
    throw new Error(`Error fetching - Status: ${fetchPromise.status}`);
  }

  return result;
}

export async function get(url, headers) {
  return createRequest({ method: 'GET', url, headers });
}

export async function post(url, body, headers) {
  return createRequest({ method: 'POST', url, body, headers });
}

export async function put(url, body, headers) {
  return createRequest({ method: 'PUT', url, body, headers });
}


export async function del(url) {
  return createRequest({ method: 'DELETE', url });
}

export async function patch(url, body, headers) {
  return createRequest({ method: 'PATCH', url, body, headers });
}

