/* eslint-disable import/no-anonymous-default-export */
import { NowRequest, NowResponse } from '@vercel/node'
import SpotifyWebApi from 'spotify-web-api-node'

const spotify = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_HOST_URL
    ? `https://${process.env.REACT_APP_HOST_URL}`
    : 'http://localhost:3000'
})

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  if (req.query?.refreshToken) {
    spotify.setRefreshToken(req.query.refreshToken as string)
    spotify
      .refreshAccessToken()
      .then((data) =>
        res.json({
          ...data.body
        })
      )
      .catch((err) => {
        res.status(500).json({ message: 'Error: ', info: err.toString() })
      })
    return
  }
  res.status(400).json({ message: 'Bad Request' })
}
