export const initialState = {
    playlists: [],
    activePlaylist: {},
    total: 0
  }
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case "GET_PLAYLISTS":
        return { ...state, playlists: action.playlists };
      case "GET_TOTAL_PLAYLISTS":
        return { ...state, total: action.total };
      case "GET_SINGLE_PLAYLIST":
        return { ...state, activePlaylist: action.activePlaylist };
      default:
        return state;
      }
  };