import countryFilter from './index'

describe('countryFilter Function', () => {
  it('Should be able to every all country filters', () => {
    const au = 'AU'
    const br = 'BR'
    const de = 'DE'
    const pt = 'PT'
    const us = 'en_US'
    const ru = 'RU'

    expect(countryFilter(au)).toEqual('AU')
    expect(countryFilter(br)).toEqual('BR')
    expect(countryFilter(de)).toEqual('DE')
    expect(countryFilter(pt)).toEqual('PT')
    expect(countryFilter(us)).toEqual('US')
    expect(countryFilter(ru)).toEqual('RU')

    expect(countryFilter(us)).not.toEqual('en_US')
  })
})
