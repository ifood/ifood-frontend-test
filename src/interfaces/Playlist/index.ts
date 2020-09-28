import { FilterParams } from "../Filter";

interface PlaylistUrl {
  spotify: string;
}

interface PlaylistImages {
  url: string;
}

export interface Playlist {
  id: string;
  description: string;
  external_urls: PlaylistUrl;
  images: PlaylistImages[];
  name: string;
}

export interface PlaylistContextProps {
  playlists: Playlist[];
  filter: FilterParams;
  setFilter: (filter: FilterParams) => void;
  setSearch: (filter: string) => void;
}
