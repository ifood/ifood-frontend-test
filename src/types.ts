export interface IFilters {
  id: string;
  name: string;
  values?: [{
    value: string;
    name: string;
  }],
  validation?: {
    primitiveType: string;
    min: number;
    max: number;
    entityType: string;
    pattern: string;
  }
}

export interface IPlaylistImage {
  url: string;
}

export interface IPlaylistUrl {
  spotify: string;
}

export interface IPlaylists {
  description: string;
  id: string;
  external_urls: IPlaylistUrl;
  images: IPlaylistImage[];
  name: string;
}
