import { gql } from 'apollo-server'

export default gql`
type Query {
  filters: [Filter]!
  playlists(
    search: String,
    limit: Int,
    offset: Int
  ): PlayListInfo!
}

type PlayListInfo {
  items: [Playlist!]!
  total: Int!
}

type Playlist {
  id: String!
  name: String!
  description: String!
  addedAt: String!
  images: [Image!]!
  collaborative: Boolean!
  externalLinks: ExternalLinks
  tracks(limit: Int, markets: [String]): [Track]!
}

type Track {
  id: String!
  name: String!
  availableMarkets: [String!]!
  album: Album!
  artists: [Artist!]!
  duration: Int
}

type Album {
  id: String!
  name: String!
  images: [Image!]!
  externalLinks: ExternalLinks!
}

type Artist {
  id: String!
  name: String!
  externalLinks: ExternalLinks
}

type Image {
  url: String!
  height: Int!
  width: Int!
}

type ExternalLinks {
  spotify: String!
}

type Filter {
  id: String!
  name: String!
  values: [FilterValue]
  validation: Validation
}

type FilterValue {
  value: String!
  name: String!
}

type Validation {
  primitiveType: String!
  entityType: String
  pattern: String
  min: Int
  max: Int
}
`
