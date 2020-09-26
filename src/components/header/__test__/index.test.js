import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { Header, HeaderProvider } from '../index'

afterEach(cleanup)

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<Header />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        filter: {
          filters: [],
          currentFilters: {},
          hide: true,
        },
        playlist: {
          playlists: [],
        },
      })
    )
  })

  afterEach(() => {
    useSelector.mockClear()
  })

  it('Snapshot testing Playlist', () => {
    const { asFragment } = render(<HeaderProvider />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should be able to call onClick prop', () => {
    const mockedOnclick = jest.fn()
    // eslint-disable-next-line prettier/prettier
    const { getByTestId } = render(<Header onClick={mockedOnclick} hide={false} />)

    const headerButton = getByTestId('header-button')

    expect(mockedOnclick).toHaveBeenCalledTimes(0)

    fireEvent.click(headerButton)
    expect(mockedOnclick).toHaveBeenCalledTimes(1)
  })
})
