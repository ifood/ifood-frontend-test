import { createQueryParams } from '../urlHelper'

describe('urlHelper', () => {
  describe('createQueryParams', () => {
    describe('empty string', () => {
      it('should return an empty string with no params', () => {
        expect(createQueryParams()).toStrictEqual('')
      })

      it('should return an empty string with params', () => {
        const params = {
          test: '',
        }
        expect(createQueryParams(params)).toStrictEqual('')
      })
    })

    it('should return a query params string', () => {
      const params = {
        test: '1',
        test1: 2,
      }

      expect(createQueryParams(params)).toStrictEqual('?test=1&test1=2')
    })

    it('should return a query params string', () => {
      const params = {
        test: '1',
        test1: 2,
      }

      expect(createQueryParams(params)).toStrictEqual('?test=1&test1=2')
    })
  })
})
