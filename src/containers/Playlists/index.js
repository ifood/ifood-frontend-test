import React, { useState, useEffect } from "react";
import { ReactComponent as YourSvg } from "assets/logo.svg";
import PlaylistCard from "components/PlaylistCard";
import PlaylistFilters from "containers/PlaylistFilters";
import { getPlaylists } from "services/api";

// TODO: intl translations

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadPlaylists = async (filters) => {
    try {
      setLoading(true);
      const { data } = await getPlaylists(filters);
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

  const renderPlaylistCards = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return playlists.map((playlist) => {
      return <PlaylistCard playlist={playlist} />;
    });
  };

  return (
    <div className="playlists">
      <YourSvg className="playlists__logo" />
      <div className="playlists__content" role="region">
        <div className="playlists__filters">
          <PlaylistFilters
            onChange={(filters) => {
              console.log(filters);
              loadPlaylists(filters);
            }}
          />
        </div>
        <div className="playlists__items">{renderPlaylistCards()}</div>
      </div>
    </div>
  );
}
