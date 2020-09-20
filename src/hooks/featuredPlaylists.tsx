import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { useSnackbar } from 'notistack';

import Spotify, { FeaturedPlaylistFilter, PlaylistItem } from '../services/spotify';

import { useAuth } from './auth';

interface FeaturedPlaylistContextData {
  loading: boolean;
  playlists: PlaylistItem[];
  filter: FeaturedPlaylistFilter;
  setSearch: (filter: string) => void;
  setFilter: (filter: FeaturedPlaylistFilter) => void;
}

const FeaturedPlaylistContext = createContext<FeaturedPlaylistContextData>(
  {} as FeaturedPlaylistContextData,
);

const FeaturedPlaylistProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { logoff } = useAuth();

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({} as FeaturedPlaylistFilter);

  const [search, setSearch] = useState('');

  const [playlists, setPlaylists] = useState([] as PlaylistItem[]);

  const getFeaturedPlaylists = useCallback(async () => {
    setLoading(true);

    try {
      const { items } = await Spotify.getFeaturedPlaylists(filter);
      setPlaylists(items);
    } catch ({ response: { status } }) {
      setPlaylists([]);

      switch (status) {
        case 400:
          enqueueSnackbar('Ops! Não conseguimos buscar as playlists, com o filtro informado.');
          break;
        case 401:
          enqueueSnackbar('Não conseguimos validar seu acesso, tente refazer o login.', { variant: 'error' });
          logoff();
          break;
        default:
          enqueueSnackbar('Desculpe! Não conseguimos buscar as playlists.', { variant: 'error' });
          break;
      }
    } finally {
      setLoading(false);
    }
  }, [filter, enqueueSnackbar, logoff]);

  const filteredPlaylists = playlists.filter(
    ({ name }: PlaylistItem) => name.toLowerCase().includes(search.toLowerCase().trim()),
  );

  useEffect(() => {
    getFeaturedPlaylists();

    const playlistsTimer = setInterval(() => {
      getFeaturedPlaylists();
    }, 30000);

    return () => clearInterval(playlistsTimer);
  }, [getFeaturedPlaylists]);

  return (
    <FeaturedPlaylistContext.Provider
      value={{
        loading,
        filter,
        setFilter,
        playlists: filteredPlaylists,
        setSearch,
      }}
    >
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
