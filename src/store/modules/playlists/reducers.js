const initialPlaylistsState = {
  items: [],
  filteredItems: [],
  isEmpty: false,
};

export default function playlists(state = initialPlaylistsState, action) {
  switch (action.type) {
    case "LOAD_PLAYLISTS":
      return { ...state, items: action.items };

    case "UPDATE_PLAYLISTS":
      return { ...state, items: action.items };

    case "REMOVE_PLAYLISTS":
      return { ...state, items: [] };

    case "FILTER_PLAYLISTS":
      return { ...state, filteredItems: action.filteredItems };

    case "REMOVE_FILTERED_PLAYLISTS":
      return { ...state, filteredItems: [] };

    case "UPDATE_PLAYLISTS_STATUS":
      return { ...state, isEmpty: action.isEmpty };

    default:
      return state;
  }
}
