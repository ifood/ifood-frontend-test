import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { PlaylistProvider, PlaylistElement } from '../index'

afterEach(cleanup)

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<Playlist />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        filter: {
          filters: [],
          currentFilters: {
            name: 'mocked',
          },
          hide: true,
        },
        playlist: {
          playlists: [
            { name: 'mocked playlist' },
            { name: 'not mocked playlist 2' },
          ],
          loading: false,
          error: null,
          total: 20,
        },
      })
    )
  })

  afterEach(() => {
    useSelector.mockClear()
  })

  it('Should be able to render without errors', () => {
    const { getByText } = render(<PlaylistProvider />)

    expect(getByText('mocked playlist')).toBeTruthy()
    expect(getByText('not mocked playlist 2')).toBeTruthy()
  })

  it('Snapshot testing Playlist', () => {
    const mockedName = 'mocked mocked'
    const mockedDescription = '<a>Mocked description</a>'
    const { asFragment } = render(
      <PlaylistElement name={mockedName} description={mockedDescription} />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should be able to render moked props', async () => {
    const mockedName = 'mocked name'
    const mockedDescription = 'Mocked description'
    // eslint-disable-next-line prettier/prettier
    const { getByText, queryByTestId } = render(<PlaylistElement name={mockedName} description={mockedDescription} />)

    const playlistContainer = queryByTestId('playlist-container')

    expect(playlistContainer).not.toBeNull()
    expect(getByText('mocked name')).toBeTruthy()
  })
})
