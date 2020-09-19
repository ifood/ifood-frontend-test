import React, {
  createContext,
  useState,
  useContext,
} from 'react';

interface FeaturedPlaylistFilter {
  locale: string;
  country: string;
  timestamp: string;
  limit: number;
  offset: number;
}

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
