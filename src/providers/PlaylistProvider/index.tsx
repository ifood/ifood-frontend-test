import React, {
  createContext,
  useCallback,
  useLayoutEffect,
  useState
} from 'react';

import { useSnackbar } from 'notistack';
import { Playlist, PlaylistContextProps } from "../../interfaces/Playlist";
import useAuthentication from "../../hooks/useAuthentication";
import useFilters from "../../hooks/useFilters";
import { FilterParams } from "../../interfaces/Filter";
import PlaylistService from '../../services/PlaylistService';

const PlaylistContext = createContext<PlaylistContextProps>({});

const PlaylistProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const { logout, isAuthenticated } = useAuthentication();

  const { setIsLoading } = useFilters();

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState<FilterParams>({});

  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const getPlaylists = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await PlaylistService.getPlaylists(filter);
      setPlaylists(result.items);
    } catch ({ response: { status } }) {
      if (status === 400) {
        enqueueSnackbar('Outch! We don\'t can search for playlist with that\'s filters.', { variant: 'error' });
        return;
      }

      if (status === 401) {
        enqueueSnackbar('Outch! Token has expired', { variant: 'error' });
        logout();
        return;
      }

      enqueueSnackbar('Outch! Outch! We don\'t can search for playlist.', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }

  }, [enqueueSnackbar, filter, logout, setIsLoading]);

  const filterPlaylists = playlists.filter(
    ({ name }: Playlist) => name.toLowerCase().includes(search.toLowerCase())
  );

  useLayoutEffect(() => {
    if (!isAuthenticated()) {
      return;
    }

    getPlaylists();

    const playlistsTimer = setInterval(async () => {
      await getPlaylists();
    }, 30000);

    return () => clearInterval(playlistsTimer);
  }, [getPlaylists, isAuthenticated]);

  return (
    <PlaylistContext.Provider
      value={ {
        filter,
        setFilter,
        playlists: filterPlaylists,
        setSearch
      } }
    >
      { children }
    </PlaylistContext.Provider>
  );
}

export { PlaylistProvider, PlaylistContext }
