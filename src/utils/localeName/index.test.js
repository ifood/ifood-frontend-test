import localeName from './index'

describe('localeName Function', () => {
  it('Should be able to return new locale names', () => {
    const au = 'en_AU'
    const br = 'pt_BR'
    const de = 'de_DE'
    const fr = 'fr_FR'
    const us = 'en_US'
    const ar = 'es_AR'

    expect(localeName(au)).toEqual('English (AU)')
    expect(localeName(br)).toEqual('Português (BR)')
    expect(localeName(de)).toEqual('Deutsch (DE)')
    expect(localeName(fr)).toEqual('Français (FR)')
    expect(localeName(us)).toEqual('English (US)')
    expect(localeName(ar)).toEqual('Español (AR)')

    expect(localeName(us)).not.toEqual('English (AU)')
    expect(localeName(au)).not.toEqual('English (US)')
  })
})
