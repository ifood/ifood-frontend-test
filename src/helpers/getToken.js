const getToken = (hashString) => {
    let hash
    hashString.substring(1)
    .split("&")
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      hash = initial
      return initial;
    },{});
    return hash
}

export default getToken