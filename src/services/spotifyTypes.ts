export interface User {
  country: string,
  display_name: string,
  email: string,
  explicit_content: {
    filter_enabled: boolean,
    filter_locked: boolean
  },
  external_urls: {
    spotify: string
  },
  followers: {
    href: any,
    total: number
  },
  href: string,
  id: string,
  images: [{
    height: any,
    url: string,
    width: any
  }],
  product: string,
  type: string,
  uri: string
}

export interface PlaylistImage {
  height: number,
  url: string,
  width: number
}

export interface Playlist {
  collaborative: boolean,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: PlaylistImage[],
  name: string,
  owner: {
    display_name: string,
    external_urls: {
      spotify: string
    },
    href: string,
    id: string,
    type: string,
    uri: string
  },
  primary_color: null,
  public: false,
  snapshot_id: string,
  tracks: {
    href: string,
    total: number
  },
  type: string,
  uri: string
}

export interface Playlists {
  href: string,
  items: Playlist[],
  limit: 20,
  next: string,
  offset: number,
  previous: any,
  total: number
}

export interface Artist {
  "external_urls": {
    "spotify": string
  },
  "href": string,
  "id": string,
  "name": string,
  "type": string,
  "uri": string
}

export interface PlaylistItem {
  "added_at": string,
  "added_by": {
    "external_urls": {
      "spotify": string
    },
    "href": string,
    "id": string,
    "type": string,
    "uri": string
  },
  "is_local": boolean,
  "primary_color": any,
  "track": {
    "album": {
      "album_type": string,
      "artists": Artist[],
      "available_markets": string[],
      "external_urls": {
        "spotify": string
      },
      "href": string,
      "id": string,
      "images": PlaylistImage[],
      "name": string,
      "release_date": string,
      "release_date_precision": string,
      "total_tracks": number,
      "type": string,
      "uri": string
    },
    "artists": Artist[],
    "available_markets": string[],
    "disc_number": number,
    "duration_ms": number,
    "episode": boolean,
    "explicit": boolean,
    "external_ids": {
      "isrc": string
    },
    "external_urls": {
      "spotify": string
    },
    "href": string,
    "id": string,
    "is_local": boolean,
    "name": string,
    "popularity": number,
    "preview_url": number,
    "track": boolean,
    "track_number": number,
    "type": string,
    "uri": string
  },
  "video_thumbnail": {
    "url": any
  }
}

export interface Playlist {
  "href": string,
  "items": PlaylistItem[],
  "limit": number,
  "next": any,
  "offset": number,
  "previous": any,
  "total": number
}