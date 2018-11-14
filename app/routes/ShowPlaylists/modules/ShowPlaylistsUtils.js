export function filterPlaylistsByName(list, name) {
  const nameCleared = name.toLocaleLowerCase();

  if (nameCleared === '') {
    return [...list];
  }

  return list.filter(item => {
    const playlistNameCleared = item.name.toLocaleLowerCase();

    return playlistNameCleared.indexOf(nameCleared) !== -1;
  });
}

function validateValue(value) {
  // Boolean(0) is false, but it's a valid value for offset
  return Boolean(value) || value === 0;
}

export function buildPlaylistsQuery(data) {
  const queryParams = ['locale', 'country', 'timestamp', 'limit', 'offset'];
  return Object.keys(data).filter(item =>
    queryParams.indexOf(item) !== -1 && validateValue(data[item]))
    .map(item => `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`)
    .join('&');
}
