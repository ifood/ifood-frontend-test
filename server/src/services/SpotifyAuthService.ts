import { RESTDataSource } from 'apollo-datasource-rest'
import { RedisCache } from 'apollo-server-cache-redis'
import { SpotifyConfig } from 'src/config'

interface TokenResponse {
  token: string;
  expiration: number;
}

export default class SpotifyAuthService extends RESTDataSource {
  private cache: RedisCache
  private config: SpotifyConfig

  constructor(
    config: SpotifyConfig,
    cache: RedisCache
  ) {
    super()
    this.cache = cache
    this.baseURL = 'https://accounts.spotify.com/api/'
    this.config = config
  }

  async requestNewToken(): Promise<TokenResponse> {
    const {
      access_token: token,
      expires_in: expiration
    } = await this.post(
      'token',
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${this.config.clientCredentials}`
        }
      }
    )

    return {
      token,
      expiration
    }
  }

  async getToken(): Promise<string> {
    const cachedToken = await this.cache.get('access_token')
    
    if (cachedToken) {
      return cachedToken
    }

    const {
      token,
      expiration
    } = await this.requestNewToken()

    await this.cache.set('access_token', token, { ttl: expiration })

    return token
  }
}