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

export interface PlaylistContextData {
  isLoading?: boolean;
  playlists?: Playlist[];
  filter?: FilterParams;
  setSearch?: (filter: string) => void;
  setFilter?: (filter: FilterParams) => void;
}

export interface PlaylistResponse {
  items: Playlist[];
  next: string;
  previous: string;
  total: number;
}
