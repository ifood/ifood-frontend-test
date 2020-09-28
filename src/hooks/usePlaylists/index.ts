import { PlaylistContextProps } from "../../interfaces/Playlist";
import { useContext } from "react";
import { PlaylistContext } from "../../providers/PlaylistProvider";

export function usePlaylists(): PlaylistContextProps {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error('context not found. Remember, usePlaylists must be used within an PlaylistProvider.');
  }

  return context;
}
