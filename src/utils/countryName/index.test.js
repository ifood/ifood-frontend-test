import countryName from './index'

describe('countryName Function', () => {
  it('Should me able to rename every country names', () => {
    const au = 'Australia'
    const br = 'Brasil'
    const de = 'Alemanhã'
    const pt = 'Portugal'
    const us = 'EUA'
    const ru = 'Rússia'

    expect(countryName(au)).toEqual('Australia')
    expect(countryName(br)).toEqual('Brasil')
    expect(countryName(de)).toEqual('Deutschland')
    expect(countryName(pt)).toEqual('Portugal')
    expect(countryName(us)).toEqual('USA')
    expect(countryName(ru)).toEqual('Russia')

    expect(countryName(us)).not.toEqual('EUA')
    expect(countryName(de)).not.toEqual('Alemanhã')
  })
})
