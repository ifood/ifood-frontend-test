import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import PlaylistCard from "components/PlaylistCard";
import PlaylistFilters from "containers/PlaylistFilters";
import { getPlaylists } from "services/api";
import { StyledSpinnerNext } from "baseui/spinner";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(true);

  const loadPlaylists = async (filters, preventAnimation) => {
    try {
      setLoading(true);
      const { data } = await getPlaylists(filters);
      if (data.playlists && Array.isArray(data.playlists.items)) {
        setPlaylists(data.playlists.items);
        if (!preventAnimation) {
          setRefreshCount((prev) => prev + 1);
        }
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
      return (
        <PlaylistCard
          key={`${refreshCount}-${playlist.id}`}
          playlist={playlist}
        />
      );
    });
  };

  const renderContent = () => {
    if (isLoading && isFirstLoading) {
      return (
        <div className="playlists__loading">
          <StyledSpinnerNext size="60px" color="#EA1D2C" />
        </div>
      );
    }

    return <div className="playlists__items">{renderPlaylistCards()}</div>;
  };

  return (
    <div className="playlists">
      <Logo className="playlists__logo" />
      <div className="playlists__content" role="region">
        {isLoading && !isFirstLoading && (
          <div className="playlists__refresh">
            <StyledSpinnerNext size="20px" color="#EA1D2C" />
          </div>
        )}
        <div className="playlists__filters">
          <PlaylistFilters
            disabled={isLoading && isFirstLoading}
            onChange={(filters, preventAnimation) => {
              loadPlaylists(filters, preventAnimation);
            }}
          />
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
