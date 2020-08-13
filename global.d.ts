type Playlist = {
  id: string
  images: { url: string }[]
  external_urls: { spotify: string }
  name: string
  description: string
}

type Filter = {
  locale?: string
  country?: string
  limit?: number
  offset?: number
  query?: string
}

type FilterWithTimestamp = Filter & {
  timestamp?: string
}

type FilterWithDateTime = Filter & {
  date?: string
  time?: string
}