import { ApolloServer } from 'apollo-server'
import { RedisCache } from 'apollo-server-cache-redis'
import { Playlist, Filter, Track } from './api'
import { SpotifyAuthService } from './services'
import schema from './data/schema'
import config from './config'

const cache = new RedisCache(config.redis)

export default new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Playlist: {
      tracks(source, { limit, markets }, { dataSources }) {
        return dataSources.trackAPI.getAllBy(source.id, limit, markets)
      }
    },
    Query: {
      playlists(_source, { search, limit, offset }, { dataSources }) {
        return dataSources.playlistAPI.getAll(search, limit, offset)
      },
      filters(_source, _args, { dataSources }) {
        return dataSources.filterAPI.getAll()
      }
    }
  },
  cache,
  dataSources: () => ({
    playlistAPI: new Playlist(config.spotify),
    trackAPI: new Track(config.spotify),
    spotifyAuthService: new SpotifyAuthService(config.spotify, cache),
    filterAPI: new Filter(config.ifood)
  }),
  cors: config.web.cors,
})