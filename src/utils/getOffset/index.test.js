import getOffset from './index'

describe('getOffset Function', () => {
  it('Should be able to crete an offset list', () => {
    expect(getOffset(1, 5)).toEqual(0)
    expect(getOffset(2, 5)).toEqual(5)
    expect(getOffset(3, 5)).toEqual(10)
    expect(getOffset(4, 5)).toEqual(15)

    expect(getOffset(2, 5)).not.toEqual(10)
    expect(getOffset(3, 5)).not.toEqual(15)
  })
})
