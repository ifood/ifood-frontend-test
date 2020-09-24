/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useCallback } from 'react';

import { useToast } from './toast';

import api from '../services/api';

interface PlaylistImage {
  url: string;
}

interface PlaylistURL {
  spotify: string;
}
interface Playlist {
  description: string;
  collaborative: boolean;
  name: string;
  images: Array<PlaylistImage>;
  external_urls: PlaylistURL;
}

interface FilterParams {
  country?: string;
  locale?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

interface PlaylistContextData {
  playlists: Array<Playlist>;
  loadPlaylists(params: FilterParams): Promise<void>;
  filterByName(name: string): void;
}

const PlaylistContext = createContext<PlaylistContextData>(
  {} as PlaylistContextData,
);

const PlaylistProvider: React.FC = ({ children }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState<Playlist[]>([]);
  const { addToast } = useToast();

  const loadPlaylists = useCallback(
    async ({ country, locale, timestamp, limit, offset }: FilterParams) => {
      try {
        const response = await api.get('/v1/browse/featured-playlists', {
          params: {
            country,
            locale,
            timestamp,
            limit: limit || 50,
            offset: offset || undefined,
          },
        });

        setPlaylists(response.data.playlists.items);
        setFilteredPlaylists(response.data.playlists.items);
      } catch (error) {
        addToast({
          title: "Cant't fetch any playlists",
          description: 'We found an error while fetching playlists, try again',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  const filterByName = useCallback(
    (name: string) => {
      if (!name) {
        setFilteredPlaylists(playlists);
        return;
      }

      const filteredPlaylistByName = playlists.filter(playlist =>
        playlist.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );

      setFilteredPlaylists(filteredPlaylistByName);
    },
    [playlists],
  );

  return (
    <PlaylistContext.Provider
      value={{ playlists: filteredPlaylists, loadPlaylists, filterByName }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

function usePlaylist(): PlaylistContextData {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

export { usePlaylist, PlaylistProvider };
