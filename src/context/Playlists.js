import React from "react";
import { getFeaturePlaylists } from "../services/spotify";

export const PlaylistsStateContext = React.createContext();
export const PlaylistsDispatchContext = React.createContext();

//usar arrowfunctions

const initialState = {
  featuredPlaylist: {},
};

function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case "load": {
      return { featuredPlaylist: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlaylistsProvider({ children }) {
  const [state, dispatch] = React.useReducer(playlistsReducer, initialState);
  return (
    <PlaylistsStateContext.Provider value={state}>
      <PlaylistsDispatchContext.Provider value={dispatch}>
        {children}
      </PlaylistsDispatchContext.Provider>
    </PlaylistsStateContext.Provider>
  );
}

async function loadPlaylists(dispatch, selectedFilters) {
  try {
    const featuredPlaylist = await getFeaturePlaylists(selectedFilters);
    dispatch({ type: "load", payload: featuredPlaylist });
  } catch (error) {
    // dispatch({ type: "fail update", error });
  }
}

export { PlaylistsProvider, loadPlaylists };
