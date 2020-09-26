import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import DatePicker from '../index'

afterEach(cleanup)

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<DatePicker />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        filter: {
          filters: [{ id: 'timestamp', name: 'Data e Horário' }],
          currentFilters: {
            timestamp: null,
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
    const { getByText } = render(<DatePicker />)

    expect(getByText('Data e Horário')).toBeTruthy()
  })

  it('Snapshot testing DatePicker', () => {
    const { asFragment } = render(<DatePicker />)

    expect(asFragment()).toMatchSnapshot()
  })
})
