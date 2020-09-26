import payloadFactory from './index'

describe('payloadFactory Function', () => {
  it('Should me able to crete objects with pairs key/value', () => {
    expect(payloadFactory('test', 'mock')).toEqual({ test: 'mock' })
    expect(payloadFactory('test', ['mock2'])).toEqual({ test: ['mock2'] })

    expect(payloadFactory('test', 'mock')).not.toEqual({ mock: 'test' })
  })
})
