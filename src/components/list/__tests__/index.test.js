import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { List, ListProvider } from '../index'

afterEach(cleanup)

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<List />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        filter: {
          filters: [
            { id: 'locale', name: 'locale', values: [{ value: 'pt_BR' }] },
          ],
          currentFilters: {
            country: '',
            locale: 'pt_BR',
          },
          hide: true,
        },
        playlist: {
          playlists: [],
          total: 20,
        },
      })
    )
  })

  afterEach(() => {
    useSelector.mockClear()
  })

  it('Should be able to render without errors', () => {
    const { getByText } = render(<ListProvider id='locale' />)

    expect(getByText('locale')).toBeTruthy()
  })

  it('Snapshot testing List', () => {
    const mockedValues = [{ name: 'mocked', value: 'pt_BR' }]
    const { asFragment } = render(<List values={mockedValues} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should be able to render with moked props', async () => {
    const mockedValues = [{ name: 'mocked', value: 'pt_BR' }]
    const mockedOnClick = jest.fn()
    // eslint-disable-next-line prettier/prettier
    const { getByText, queryByTestId } = render(<List values={mockedValues} onClick={mockedOnClick} />)

    const listContainer = queryByTestId('list-container')

    expect(listContainer).not.toBeNull()
    expect(getByText('mocked')).toBeTruthy()
    expect(mockedOnClick).toHaveBeenCalledTimes(0)

    fireEvent.click(getByText('mocked'))
    expect(mockedOnClick).toHaveBeenCalledTimes(1)
    expect(mockedOnClick).toHaveBeenCalledWith('pt_BR')
  })
})
