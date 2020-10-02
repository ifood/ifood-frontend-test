import { useCallback, useEffect, useState } from "react";
import { SpotifyServiceAuth } from "../services/auth.service";
import { IPlaylists } from "../types";

const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<IPlaylists[]>([]);

  const getFeaturedPlaylist = useCallback(async () => {
    const featuredPlaylists = await SpotifyServiceAuth.getPlaylists();

    setPlaylists(featuredPlaylists);
  }, []);

  useEffect(() => {
    getFeaturedPlaylist();
  }, [getFeaturedPlaylist]);

  return playlists;
};

export default usePlaylists;
