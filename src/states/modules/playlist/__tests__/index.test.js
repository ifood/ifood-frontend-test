import { selectAllPlaylists } from '../selectors'

describe('payloadFactory Function', () => {
  const mockedPayload = {
    items: [
      {
        id: 1,
        name: 'mocked',
        images: [
          {
            url: '/url',
          },
        ],
        owner: {
          spotify: 'mocked Owner',
        },
        external_urls: {
          spotify: '/href',
        },
        description: 'mocked description',
        collaborative: 'mocked collaborative',
      },
    ],
  }

  const mockedResult = [
    {
      id: 1,
      name: 'mocked',
      image: '/url',

      author: 'mocked Owner',
      link: '/href',
      description: 'mocked description',
      collaborative: 'mocked collaborative',
    },
  ]

  const mockedFalseResult = [
    {
      id: 1,
      name: 'mocked',
      image: '/url',

      author: null,
      href: '/href',
      description: 'mocked description',
      collaborative: 'mocked collaborative',
    },
  ]

  it('Should be able to crete objects with pairs key/value', () => {
    expect(selectAllPlaylists(mockedPayload)).toEqual(mockedResult)

    expect(selectAllPlaylists(mockedPayload)).not.toEqual(mockedFalseResult)
  })
})
