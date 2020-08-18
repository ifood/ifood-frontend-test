type Image = {
  url: string;
};

export interface PlaylistInterface {
  id: string;
  images: Image[];
  name: string;
  description: string;
  external_urls: {
    spotify: string;
  };
}

export interface FeaturedPlaylistsInterface {
  message: string;
  playlists: { items: PlaylistInterface[] };
}
