import path from 'path'
import { config } from 'dotenv'
import { stringToBase64 } from '../utils'

interface WebConfig {
  endpoint: string;
  port: number | string;
  cors: {
    origin: string;
  };
}

interface GraphqlConfig {
  schemaPath: string;
}

export interface IfoodConfig {
  filtersUrl: string;
}

export interface SpotifyConfig {
  clientCredentials: string;
  user: string;
  cache: {
    ttl: number;
  };
}

interface RedisConfig {
  port: number;
  host: string;
  family: number;
}

interface Config {
  web: WebConfig;
  redis: RedisConfig;
  graphql: GraphqlConfig;
  spotify: SpotifyConfig;
  ifood: IfoodConfig;
}

config()

const failWithMandatoryEnvVars = (envVars: string[]): void | never => {
  envVars.forEach(envVar => {
    if (!process.env[envVar]) {
      throw new Error(
        `${envVar} is mandatory in you env file.`
      )
    }
  })
}

failWithMandatoryEnvVars([
  'SPOTIFY_USER',
  'SPOTIFY_CLIENT_ID',
  'SPOTIFY_CLIENT_SECRET',
  'IFOOD_FILTERS_URL',
  'REDIS_PORT'
])

const clientCredentials = stringToBase64(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
)

export default {
  web: {
    endpoint: '/graphql',
    port: process.env.PORT || 4000,
    cors: {
      origin: process.env.ORIGIN || '*'
    }
  },
  redis: {
    port: parseInt(process.env.REDIS_PORT || ''),
    host: process.env.REDIS_HOST,
    family: 4
  },
  graphql: {
    schemaPath: path.resolve(__dirname, `../data/schema.graphql`),
  },
  spotify: {
    clientCredentials,
    user: process.env.SPOTIFY_USER,
    cache: {
      ttl: 3600
    }
  },
  ifood: {
    filtersUrl: process.env.IFOOD_FILTERS_URL
  }
} as Config
