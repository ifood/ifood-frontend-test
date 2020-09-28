import paramsFactory from './index'

describe('paramsFactory Function', () => {
  it('Should be able to append key/values pairs to an object', () => {
    expect(paramsFactory({}, ['test', 'mock'])).toEqual({ test: 'mock' })
    expect(paramsFactory({ test: 'mock' }, ['new', 'mock2'])).toEqual({
      test: 'mock',
      new: 'mock2',
    })
    expect(paramsFactory({ test: 'mock' }, ['test', 'mock2'])).toEqual({
      test: 'mock2',
    })

    expect(paramsFactory({ test: 'mock' }, ['test', 'mock2'])).not.toEqual({
      test: 'mock',
    })
  })
})
