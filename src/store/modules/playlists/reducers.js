export default function playlists(state = [], action) {
  switch (action.type) {
    case "LOAD_PLAYLISTS":
      return [...state, ...action.playlists];

    case "UPDATE_PLAYLISTS":
      return [...action.playlists];

    default:
      return state;
  }
}
