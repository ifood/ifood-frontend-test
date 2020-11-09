import React, { useState, useEffect } from "react";
import { ReactComponent as YourSvg } from "assets/logo.svg";
import PlaylistCard from "components/PlaylistCard";
import PlaylistFilters from "containers/PlaylistFilters";
import { getPlaylists } from "services/api";
import { Spinner } from "baseui/spinner";

// TODO: intl translations

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

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
    setIsFirstLoading(false);
    setLoading(false);
  };

  useEffect(() => {
    loadPlaylists();
  }, []);

  const renderPlaylistCards = () => {
    return playlists.map((playlist) => {
      return <PlaylistCard playlist={playlist} />;
    });
  };

  const renderContent = () => {
    if (isLoading && isFirstLoading) {
      return (
        <div className="playlists__loading">
          <Spinner size="60px" color="#EA1D2C" />
        </div>
      );
    }

    return <div className="playlists__items">{renderPlaylistCards()}</div>;
  };

  return (
    <div className="playlists">
      <YourSvg className="playlists__logo" />
      <div className="playlists__content" role="region">
        {isLoading && !isFirstLoading && (
          <div className="playlists__refresh">
            <Spinner size="20px" color="#EA1D2C" />
          </div>
        )}
        <div className="playlists__filters">
          <PlaylistFilters
            disabled={isLoading && isFirstLoading}
            onChange={(filters) => {
              console.log(filters);
              loadPlaylists(filters);
            }}
          />
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
