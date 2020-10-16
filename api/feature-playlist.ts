/* eslint-disable import/no-anonymous-default-export */
import { NowRequest, NowResponse } from '@vercel/node'
import SpotifyWebApi from 'spotify-web-api-node'

const spotify = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_HOST_URL
    ? `https://${process.env.REACT_APP_HOST_URL}`
    : 'http://localhost:3000/callback/'
})

function removeNullProperties(obj: {}) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key].trim()
    const hasProperties = value && Object.keys(value).length > 0
    if (value === null || value === '') {
      delete obj[key]
    } else if (typeof value !== 'string' && hasProperties) {
      removeNullProperties(value)
    }
  })

  return obj
}

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  if (req.query?.token) {
    const { token, ...rest } = req.query

    const paramsSerelize = removeNullProperties(rest)

    spotify.setAccessToken(token as string)
    spotify
      .getFeaturedPlaylists({ ...paramsSerelize })
      .then((data) =>
        res.json({
          ...data.body
        })
      )
      .catch((err) => {
        res.status(401).json({ message: 'Error: ', info: err.toString() })
      })
    return
  }
  res.status(400).json({ message: 'Bad Request' })
}
