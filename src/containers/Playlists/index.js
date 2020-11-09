import React, { useState, useEffect } from "react";
import { getPlaylists } from "services/api";
import { ReactComponent as YourSvg } from "assets/logo.svg";
import PlaylistCard from "components/PlaylistCard";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadPlaylists = async () => {
    try {
      setLoading(true);
      const { data } = await getPlaylists();
      if (data.playlists && Array.isArray(data.playlists.items)) {
        setPlaylists(data.playlists.items);
      }
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPlaylists();
  }, []);

  return (
    <div className="playlists">
      <YourSvg />
      <div className="playlists__items">
        {playlists.map((playlist) => {
          return <PlaylistCard playlist={playlist} />;
        })}
      </div>
    </div>
  );
}
