import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { SpotifyServiceAuth } from "../services/auth.service";
import { IPlaylists } from "../types";

const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<IPlaylists[]>([]);

  const getFeaturedPlaylist = useCallback(async () => {
    const featuredPlaylists = await SpotifyServiceAuth.getPlaylists({
      limit: 12,
      offset: 0,
      locale: '',
      timestamp: moment().format()
    });

    setPlaylists(featuredPlaylists);
  }, []);

  useEffect(() => {
    getFeaturedPlaylist();
  }, [getFeaturedPlaylist]);

  return playlists;
};

export default usePlaylists;
