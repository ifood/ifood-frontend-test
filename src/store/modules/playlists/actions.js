export const loadPlaylists = (playlists) => {
  return {
    type: "LOAD_PLAYLISTS",
    playlists,
  };
};

export const updatePlaylists = (playlists) => {
  return {
    type: "UPDATE_PLAYLISTS",
    playlists,
  };
};
