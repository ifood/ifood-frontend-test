export type User = {
  display_name: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  type: string
  uri: string
}

export type ExternalUrls = {
  spotify: string
}

export type Followers = {
  href?: string
  total: number
}

export type Image = {
  height?: number | string
  url: string
  width?: number | string
}
