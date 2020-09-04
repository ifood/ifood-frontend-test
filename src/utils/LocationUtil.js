import QueryString from 'query-string';

function getHashAsObject() {
  return QueryString.parse(window.location.hash);
}

function cleanHash() {
  window.location.hash = '';
}

export { getHashAsObject, cleanHash };
