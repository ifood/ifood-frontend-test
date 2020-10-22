import { handleCountryError } from '../handleCountryError'


describe('calls handleCountryError', () => {
    it('should return "US" when receives "en_US" as argument', () => {
      const result = handleCountryError('en_US')

      expect(result).toBe('US')
    })

    it('should return same argument if its value is not en_US', () => {
      const result = handleCountryError('DE')

      expect(result).toBe('DE')
    })
})
