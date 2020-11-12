export function listPlaylists(playlists) {
  return {
    type: 'LIST_PLAYLISTS',
    playlists,
  };
}

export function searchPlaylists(playlists) {
  return {
    type: 'SEARCH_PLAYLISTS',
    playlists,
  };
}

export function filterPlaylists(playlists) {
  return {
    type: 'FILTER_PLAYLISTS',
    playlists,
  };
}
