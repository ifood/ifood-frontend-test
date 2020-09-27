import React, {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';

import { useSnackbar } from 'notistack';
import { Playlist, PlaylistContextData } from "../../interfaces/Playlist";
import useAuthentication from "../../hooks/useAuthentication";
import useFilters from "../../hooks/useFilters";
import { FilterParams } from "../../interfaces/Filter";
import PlaylistService from '../../services/PlaylistService';

const PlaylistContext = createContext<PlaylistContextData>({});

const PlaylistProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const { logout, isAuthenticated } = useAuthentication();

  const { setIsLoading } = useFilters();

  const [filter, setFilter] = useState<FilterParams>({});

  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const getPlaylists = useCallback(async () => {
    setIsLoading(true);
    const { items } = await PlaylistService.getPlaylists(filter)
      .catch(({ response: { status } }) => {
        if (status === 400) {
          enqueueSnackbar('Outch! We don\'t can search for playlist with that\'s filters.');
        }

        if (status === 401) {
          enqueueSnackbar('Outch! Token has expired', { variant: 'error' });
          logout();
        }

        enqueueSnackbar('Outch! Outch! We don\'t can search for playlist.', { variant: 'error' });
      })
      .finally(() => setIsLoading(false));

    setPlaylists(items);
  }, [enqueueSnackbar, filter, logout, setIsLoading]);

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
        playlists
      } }
    >
      { children }
    </PlaylistContext.Provider>
  );
}

export { PlaylistProvider, PlaylistContext }
