export type QSType = {
  locale: string
  country: string
  limit: number
  timestamp: string
  offset: number
}

export interface PlaylistRoot {
  message: string
  playlists: Playlists
}

export interface Playlists {
  href: string
  items: Item[]
  limit: number
  next: string | null
  offset: number
  previous: string
  total: number
}

export interface Item {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color: string
  public: string | null
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: string | null
  url: string
  width: string | null
}

export interface Owner {
  display_name: string
  external_urls: ExternalUrls2
  href: string
  id: string
  type: string
  uri: string
}

export interface ExternalUrls2 {
  spotify: string
}

export interface Tracks {
  href: string
  total: number
}
