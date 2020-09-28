import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import SelectProvider, { Select } from '../index'

afterEach(cleanup)

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<Select />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        filter: {
          filters: [
            {
              id: 'limit',
              name: 'Quantidade',
              validation: { min: 1, max: 50 },
            },
          ],
          currentFilters: {
            name: '',
            country: '',
            locale: '',
            limit: 20,
            offset: 1,
            date: null,
          },
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
    const { getByText } = render(<SelectProvider id='limit' />)

    const title = getByText('Quantidade')

    expect(title).toBeTruthy()
  })

  it('Should be able to render without errors', () => {
    const mockedOptions = [5, 10, 15, 20, 30]
    const { asFragment } = render(<Select options={mockedOptions} value='20' />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should be able to render limit filter', async () => {
    const mockedOptions = ['5', '10', '15', '20']
    // eslint-disable-next-line prettier/prettier
    const { getByText, queryByTestId } = render(<Select options={mockedOptions} value='5' />)

    const selectContainer = queryByTestId('select-container')

    expect(selectContainer).toBeDefined()
    expect(selectContainer).not.toBeNull()

    expect(getByText('5')).toBeTruthy()
    expect(getByText('15')).toBeTruthy()
  })
})
