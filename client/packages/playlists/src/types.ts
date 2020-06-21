type Image = {
  height?: number;
  width?: number;
  url: string;
}

type ExternalLinks = {
  spotify: string;
}

type TrackAlbum = {
  id: string;
  name: string;
  externalLinks?: ExternalLinks;
  images: Image[];
}

type TrackArtist = {
  id: string;
  name: string;
  externalLinks?: {
    spotify: string;
  };
}

export type PlaylistTrack = {
  id: string;
  name: string;
  album: TrackAlbum;
  duration: number;
  artists: TrackArtist[];
}

export type PlaylistType = {
  id: string;
  name: string;
  description: string;
  images: Image[];
  tracks: PlaylistTrack[];
  externalLinks?: ExternalLinks;
}