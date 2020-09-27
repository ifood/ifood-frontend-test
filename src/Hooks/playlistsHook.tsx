import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

import SpotifyService, {
  IPlaylistFilter,
  IPlaylistItem,
} from "../Services/spotifyService";

import { useAuth } from "./auth";

interface IFeaturedPlaylistContext {
  playlists: IPlaylistItem[];
  filter: IPlaylistFilter;
  setSearch: (filter: string) => void;
  setFilter: (filter: IPlaylistFilter) => void;
}

const FeaturedPlaylistContext = createContext<IFeaturedPlaylistContext>(
  {} as IFeaturedPlaylistContext
);

const FeaturedPlaylistProvider: React.FC = ({ children }) => {
  const { signOut } = useAuth();

  const [filter, setFilter] = useState({} as IPlaylistFilter);

  const [search, setSearch] = useState("");

  const [playlists, setPlaylists] = useState([] as IPlaylistItem[]);

  const getFeaturedPlaylists = useCallback(async () => {
    try {
      const { items } = await SpotifyService.getPlaylists(filter);
      setPlaylists(items);
    } catch ({ response: { status } }) {
      setPlaylists([]);

      switch (status) {
        case 400:
          alert(
            "Desculpe! Não achamos as playlists com o filtro informado."
          );
          break;
        case 401:
          alert("Tentamos.... mas não conseguimos fazer o login com sua conta do Spotify.");
          signOut();
          break;
        default:
          alert("Desculpe! Um erro aconteceu. Por favor, tente refazer a busca.");
          break;
      }
    } finally {
    }
  }, [filter, signOut]);

  const filteredPlaylists = playlists.filter(({ name }: IPlaylistItem) =>
    name.toLowerCase().includes(search.toLowerCase().trim())
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

function useFeaturedPlaylist(): IFeaturedPlaylistContext {
  const context = useContext(FeaturedPlaylistContext);

  if (!context) {
    throw new Error(
      "useFeaturedPlaylist must be used within an FeaturedPlaylistProviver"
    );
  }

  return context;
}

export { FeaturedPlaylistProvider, useFeaturedPlaylist };
