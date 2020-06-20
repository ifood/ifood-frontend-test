import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { SpotifyConfig } from '../config'

interface TrackType {
  id: string;
  name: string;
  availableMarkets: string[];
  album: {
    id: string,
    name: string,
    images: object[],
    externalLinks: object
  },
  artists: object[],
  duration: number
}

export default class Track extends RESTDataSource {
  private config: SpotifyConfig

  constructor(
    config: SpotifyConfig
  ) {
    super()
    this.baseURL = 'https://api.spotify.com/v1/playlists/'
    this.config = config
  }

  async willSendRequest(request: RequestOptions): Promise<void> {
    const { spotifyAuthService } = this.context.dataSources
    const token = await spotifyAuthService.getToken()
    request.headers.set('Authorization', `Bearer ${token}`)
  }

  reduce(tracks: any): TrackType[] {
    return tracks.items.map(({ track }: any) => ({
      id: track.id,
      name: track.name,
      availableMarkets: track.available_markets,
      album: {
        id: track.album.id,
        name: track.album.name,
        images: track.album.images,
        externalLinks: track.album.external_urls
      },
      artists: track.artists,
      duration: track.duration_ms
    }))
  }

  filterByMarkets(markets: string[], track: TrackType): boolean {
    return track.availableMarkets.some(market => markets.includes(market))
  }

  async getAllBy(playlistId: string, limit = 100, markets: string[]): Promise<TrackType[]> {
    const tracks = await this.get(
      `${playlistId}/tracks`,
      { limit },
      { cacheOptions: this.config.cache }
    )

    if (markets.length) {
      return this
        .reduce(tracks)
        .filter(this.filterByMarkets.bind(this, markets))
    }

    return this.reduce(tracks)
  }
}