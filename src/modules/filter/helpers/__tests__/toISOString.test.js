import { toISOString } from '../toISOString'

describe('Calls toISOString', () => {
  it('should return ISO format date and GMT time', () => {
    const result = toISOString('2020-10-07T08:08')

    expect(result).toBe('2020-10-07T11:08:00.000')
  })
})
