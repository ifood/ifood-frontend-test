import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { SpotifyConfig } from '../config'
import { compare } from '../utils'

export default class Playlist extends RESTDataSource {
  private config: SpotifyConfig

  constructor(
    config: SpotifyConfig
  ) {
    super()
    this.baseURL = `https://api.spotify.com/v1/users/${config.user}`
    this.config = config
  }

  async willSendRequest(request: RequestOptions): Promise<void> {
    const { spotifyAuthService } = this.context.dataSources
    const token = await spotifyAuthService.getToken()
    request.headers.set('Authorization', `Bearer ${token}`)
  }

  async getAll(search?: string, limit = 50, offset = 0): Promise<object> {
    const playlists = await this.get(
      'playlists',
      { limit, offset },
      { cacheOptions: this.config.cache }
    )

    if (!search) {
      return playlists
    }

    const filteredItems = playlists.items.filter((item: any) => compare(item.name, search))

    return {
      total: filteredItems.length,
      items: filteredItems
    }
  }
}