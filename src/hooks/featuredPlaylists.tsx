import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import Spotify, { FeaturedPlaylistFilter } from '../services/spotify';

interface FeaturedPlaylistContextData {
  loading: boolean;
  filter: FeaturedPlaylistFilter;
  setFilter: (filter: FeaturedPlaylistFilter) => void;
}

const FeaturedPlaylistContext = createContext<FeaturedPlaylistContextData>(
  {} as FeaturedPlaylistContextData,
);

const FeaturedPlaylistProvider: React.FC = ({ children }) => {
  const [loading] = useState(false);
  const [filter, setFilter] = useState({} as FeaturedPlaylistFilter);

  const getFeaturedPlaylists = useCallback(async () => {
    Spotify.getFeaturedPlaylists(filter);
  }, [filter]);

  useEffect(() => {
    getFeaturedPlaylists();
  }, [getFeaturedPlaylists]);

  return (
    <FeaturedPlaylistContext.Provider value={{ loading, filter, setFilter }}>
      {children}
    </FeaturedPlaylistContext.Provider>
  );
};

function useFeaturedPlaylist(): FeaturedPlaylistContextData {
  const context = useContext(FeaturedPlaylistContext);

  if (!context) {
    throw new Error('useFeaturedPlaylist must be used within an FeaturedPlaylistProviver');
  }

  return context;
}

export { FeaturedPlaylistProvider, useFeaturedPlaylist };
