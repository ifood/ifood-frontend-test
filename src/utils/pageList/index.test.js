import pageList from './index'

describe('offsetList Function', () => {
  it('Should be able to crete an offset list', () => {
    expect(pageList()).toEqual([1])
    expect(pageList(5)).toEqual([1, 2, 3, 4, 5])

    expect(pageList(10)).not.toEqual([5, 10, 15])
  })
})
