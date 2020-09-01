import React from "react";
import { getFeaturePlaylists } from "../services/spotify";

export const PlaylistsStateContext = React.createContext();
export const PlaylistsDispatchContext = React.createContext();

const initialState = {
  featuredPlaylist: {},
  loading: false,
  error: "",
};

function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    case "LOAD": {
      return { featuredPlaylist: action.payload };
    }
    case "ERROR": {
      return { ...state, error: action.payload };
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
  getFeaturePlaylists(selectedFilters)
    .then((data) => {
      console.log(data);
      dispatch({ type: "LOAD", payload: data.data });
      dispatch({ type: "LOADING", payload: false });
    })
    .catch((error) => {
      dispatch({ type: "LOADING", payload: false });
      dispatch({
        type: "ERROR",
        payload: error?.response?.data?.error?.message,
      });
    });
}

export { PlaylistsProvider, loadPlaylists };
