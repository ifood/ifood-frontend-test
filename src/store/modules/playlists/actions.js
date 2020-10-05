export const loadPlaylists = (items) => {
  return {
    type: "LOAD_PLAYLISTS",
    items,
  };
};

export const updatePlaylists = (items) => {
  return {
    type: "UPDATE_PLAYLISTS",
    items,
  };
};

export const removePlaylists = () => {
  return {
    type: "REMOVE_PLAYLISTS",
  };
};

export const updatePlaylistsStatus = (isEmpty) => {
  return {
    type: "UPDATE_PLAYLISTS_STATUS",
    isEmpty,
  };
};
