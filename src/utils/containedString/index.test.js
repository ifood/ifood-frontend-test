import containedString from './index'

describe('containedString Function', () => {
  it('Should be able to check if a string is substring of other', () => {
    const string = 'abcd efg'
    const subString = 'cd e'
    const subString2 = 'ABCD'
    const subString3 = 'ABCD efG'
    const subString4 = '   abcd efg '
    const subString5 = '  a bcd efg '

    expect(containedString(string, subString)).toBeTruthy()
    expect(containedString(string, subString2)).toBeTruthy()
    expect(containedString(string, subString3)).toBeTruthy()
    expect(containedString(string, subString4)).toBeTruthy()

    expect(containedString(string, subString5)).toBeFalsy()
  })
})
