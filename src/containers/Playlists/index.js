import React, { useState, useEffect } from "react";
import { ReactComponent as YourSvg } from "assets/logo.svg";
import PlaylistCard from "components/PlaylistCard";
import PlaylistFilters from "containers/PlaylistFilters";
import { getPlaylists } from "services/api";

// TODO: intl translations

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
      <YourSvg className="playlists__logo" />
      <div className="playlists__content" role="region">
        <div className="playlists__filters">
          <PlaylistFilters
            onChange={(values) => {
              console.log(values);
            }}
          />
        </div>

        <div className="playlists__items">
          {playlists.map((playlist) => {
            return <PlaylistCard playlist={playlist} />;
          })}
        </div>
      </div>
    </div>
  );
}
