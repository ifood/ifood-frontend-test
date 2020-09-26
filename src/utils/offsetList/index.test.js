import offsetList from './index'

describe('offsetList Function', () => {
  it('Should me able to crete an offset list', () => {
    expect(offsetList()).toEqual([1])
    expect(offsetList(5)).toEqual([1, 2, 3, 4, 5])

    expect(offsetList(10)).not.toEqual([5, 10, 15])
  })
})
