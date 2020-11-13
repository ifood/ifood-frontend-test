import { isTokenValid, getNewToken, getToken } from './spotifyAuth'
import formatISO from 'date-fns/formatISO'
import addDays from 'date-fns/addDays'

jest.mock('../api/playlist', () => ({
  getTokenAPI: () => ({ expires_in: '1', access_token: 'token' }),
}))

describe('spotifyAuth', () => {
  describe('isTokenValid', () => {
    beforeEach(() => {
      localStorage.clear()
    })
    describe('should return false', () => {
      beforeEach(() => {
        localStorage.clear()
      })

      it('without token and tokenExpiration', () => {
        expect(isTokenValid()).toBe(false)
      })

      it('without token', () => {
        localStorage.setItem('spotify_token_expiration', formatISO(new Date()))
        expect(isTokenValid()).toBe(false)
      })

      it('without date', () => {
        localStorage.setItem('spotify_token', 'spotify_token')
        expect(isTokenValid()).toBe(false)
      })

      it('invalid date', () => {
        localStorage.setItem('spotify_token_expiration', formatISO(new Date()))
        localStorage.setItem('spotify_token', 'spotify_token')
        expect(isTokenValid()).toBe(false)
      })
    })

    it('should return true', () => {
      const tomorrow = addDays(new Date(), 1)

      localStorage.setItem('spotify_token_expiration', formatISO(tomorrow))
      localStorage.setItem('spotify_token', 'spotify_token')
      expect(isTokenValid()).toBe(true)
    })
  })

  describe('isTokenValid', () => {
    it('should return token', async () => {
      const answer = await getNewToken()

      expect(answer).toStrictEqual('token')
    })
  })

  describe('getToken', () => {
    beforeEach(() => {
      localStorage.clear()
    })

    it('should get new token', async () => {
      const answer = await getToken()

      expect(answer).toStrictEqual('token')
    })

    it('should get current token', async () => {
      const tomorrow = addDays(new Date(), 1)
      localStorage.setItem('spotify_token_expiration', formatISO(tomorrow))
      localStorage.setItem('spotify_token', 'spotify_token')

      const answer = await getToken()

      expect(answer).toStrictEqual('spotify_token')
    })
  })
})
