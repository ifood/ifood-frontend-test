import QueryString from "query-string";

function getHashObject() {
  return QueryString.parse(window.location.hash);
}

function resetHash() {
  window.location.hash = "";
}

export { getHashObject, resetHash };
