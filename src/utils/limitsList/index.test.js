import limitsList from './index'

describe('limitsList Function', () => {
  it('Should be able to crete a limit list', () => {
    expect(limitsList()).toEqual([5, 10, 15, 20])
    expect(limitsList(10)).toEqual([5, 10])

    expect(limitsList(10)).not.toEqual([5, 10, 15])
  })
})
