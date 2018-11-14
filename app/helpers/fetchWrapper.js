/**
 *
 * @param {Object} body a javascript object
 * @returns {String} an url query string (to use along with x-www-form-urlencoded Content-Type)
 */
function parseBody(body) {
  return Object.keys(body)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`)
    .join('&');
}

/**
 * Builds the request object and does a request using fetch
 *
 * @param {Object} requestConfig
 * @param {string} requestConfig.method http method
 * @param {string} requestConfig.url resource url
 * @param {Object} requestConfig.body request body
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
async function createRequest({ method, url, body }) {
  const client_id = '38165eb1c6e3421095c7e615c99d1899';
  const client_secret = '3cbc3c6c01fc453782f27dbefc40f05b';
  const authorizationHeaders = btoa(`${client_id}:${client_secret}`);
  const fetchPromise = await fetch(url, {
    method,
    body: body && parseBody(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${authorizationHeaders}`,
    },
  });

  const result = await fetchPromise.json();

  if (!fetchPromise.ok) {
    throw new Error(`Error fetching - Status: ${fetchPromise.status}`);
  }

  return result;
}

/**
 * HTTP get, done with fetch
 *
 * @param {string} url
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
export async function get(url) {
  return createRequest({ method: 'GET', url });
}

/**
 * HTTP post, done with fetch
 *
 * @param {string} url
 * @param {Object} body
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
export async function post(url, body) {
  return createRequest({ method: 'POST', url, body });
}

/**
 * HTTP put, done with fetch
 *
 * @param {string} url
 * @param {Object} body
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
export async function put(url, body) {
  return createRequest({ method: 'PUT', url, body });
}


/**
 * HTTP delete, done with fetch
 *
 * @param {string} url
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
export async function del(url) {
  return createRequest({ method: 'DELETE', url });
}

/**
 * HTTP patch, done with fetch
 *
 * @param {string} url
 * @param {Object} body
 * @return {Object|Array} fetch response
 * @throws {Error}
 */
export async function patch(url, body) {
  return createRequest({ method: 'PATCH', url, body });
}

