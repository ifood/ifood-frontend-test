import { filterByText } from '.'

describe('filterByText', () => {
  const list = [
    {
      description:
        'A calm and relaxing Christmas piano soundtrack for the Holidays',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXbPHTEEyQ6Hv'
      },
      name: 'Christmas Peaceful Piano'
    },
    {
      description:
        'A Christmas playlist full of wonderful jazzy interpretations of some of the most classic and beloved Christmas songs.',
      name: 'Christmas Jazz'
    }
  ]

  it('should return no results for text `foo`', () => {
    expect(filterByText(list, 'foo')).toHaveLength(0)
  })

  it('should return one list item for matching text `piano`', () => {
    expect(filterByText(list, 'piano')).toHaveLength(1)
  })

  it('should return one list item for matching text `Jazz`', () => {
    expect(filterByText(list, 'Jazz')).toHaveLength(1)
  })

  it('should return two results for text `Christmas`', () => {
    expect(filterByText(list, 'Christmas')).toHaveLength(2)
  })
})
