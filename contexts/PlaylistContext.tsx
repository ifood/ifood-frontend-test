import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import {
  FeaturedPlaylistsInterface,
  PlaylistInterface,
} from '../interfaces/playlist.interface';
import {
  getFeaturedPlaylists,
  getChoicesForFilter,
} from '../services/playlist.service';
import { FilterInterface } from '../interfaces/filter.interface';

interface PlaylistStateInterface {
  featuredPlaylists: FeaturedPlaylistsInterface | null;
  filterFields: FilterInterface[];
  filterChoices: FilterInterface | null;
  playlists: PlaylistInterface[];
}

type PlaylistContext = {
  state: PlaylistStateInterface;
  filterFields: FilterInterface[];
  filterChoices: FilterInterface;
  featuredPlaylists: FeaturedPlaylistsInterface;
  setFilterChoices: (filter) => any;
  removeFilterChoices: (id) => any;
  filterByText: (name: string, text: string) => any;
};

const REFRESH_RATE = 5000;

const INITIAL_STATE = {
  featuredPlaylists: null,
  filterFields: [],
  filterChoices: null,
  playlists: [],
};

const PlaylistContext = createContext<Partial<PlaylistContext>>({});

export const PlaylistProvider = contextProps => {
  const [state, setState] = useState<PlaylistStateInterface>(INITIAL_STATE);

  const value = useMemo(() => {
    return {
      setState,
      state,
    };
  }, [state]);

  const changeState = (changedValue, keyValue) => {
    setState(prevState => ({
      ...prevState,
      [keyValue]: changedValue,
    }));
  };

  const fetchFeaturedPlaylists = useCallback(async () => {
    const params = state.filterChoices || {};
    try {
      const { data } = await getFeaturedPlaylists(params);

      if (data && Object.keys(data)) {
        changeState(data, 'featuredPlaylists');
        if (
          data.playlists &&
          data.playlists.items &&
          data.playlists.items.length
        ) {
          changeState(data.playlists.items, 'playlists');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [state.filterChoices]);

  const fetchFilters = useCallback(async () => {
    try {
      const { data } = await getChoicesForFilter();
      if (data && Object.keys(data) && data.filters.length) {
        changeState([...data.filters], 'filterFields');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setFilterChoices = useCallback(
    filter => {
      setState(prevState => ({
        ...prevState,
        filterChoices: { ...prevState.filterChoices, ...filter },
      }));
    },
    [setState],
  );

  const removeFilterChoices = useCallback(
    async id => {
      setState(prevState => {
        const nextState = prevState;
        delete nextState.filterChoices[id];
        return nextState;
      });

      await fetchFeaturedPlaylists();
    },
    [fetchFeaturedPlaylists],
  );

  const filterByText = useCallback(
    (name: string, text: string) => {
      const { featuredPlaylists } = state;
      const hasPlaylists =
        Object.keys(featuredPlaylists) &&
        featuredPlaylists.playlists &&
        featuredPlaylists.playlists.items &&
        featuredPlaylists.playlists.items.length;

      if (hasPlaylists && name === 'name') {
        const filteredByNames = featuredPlaylists.playlists.items.filter(
          playlist => {
            const replace = new RegExp(text.toLowerCase(), 'g');
            const hasMatch = replace.test(playlist.name.toLowerCase());
            return hasMatch;
          },
        );

        changeState(filteredByNames, 'playlists');
      }
    },
    [state],
  );

  useEffect(() => {
    fetchFilters();
    fetchFeaturedPlaylists();
    // setInterval(() => {
    //   fetchFeaturedPlaylists();
    // }, REFRESH_RATE);
  }, [fetchFeaturedPlaylists, fetchFilters]);

  useEffect(() => {
    const filterChoices = state.filterChoices || {};
    if (Object.keys(filterChoices).length) {
      const fetchWithParams = async () => {
        await fetchFeaturedPlaylists();
      };

      fetchWithParams();
    }
  }, [fetchFeaturedPlaylists, state.filterChoices]);

  return (
    <PlaylistContext.Provider
      value={{ ...value, setFilterChoices, removeFilterChoices, filterByText }}
      {...contextProps}
    />
  );
};

export default function usePlaylist() {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error('usePlaylist must go inside PlaylistProvider');
  }

  // console.log(context.state);

  return {
    ...context.state,
    ...context,
  };
}
