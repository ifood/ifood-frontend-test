import { rest } from 'msw'
import playlistMock from './fixtures/playlist.json'
import meMock from './fixtures/me.json'
import authoriseCodeMock from './fixtures/authorise-code.json'

export const handlers = [
  rest.get('http://api:3000/authorise-code', (_, res, ctx) => {
    return res(ctx.json(authoriseCodeMock))
  }),
  rest.get('http://api:3000/me', (_, res, ctx) => {
    return res(ctx.json(meMock))
  }),
  rest.get(
    'http://api:3000/feature-playlist?token=BQAAXDqpLDFgNEqInxoiZjQyu7Xna4J96vQ0e8m9&',
    (req, res, ctx) => {
      return res(ctx.json(playlistMock))
    }
  )
]
