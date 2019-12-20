import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { PlaylistHeader } from '.'

describe('PlaylistHeader', () => {
  let component
  let mockCallback

  beforeEach(() => {
    mockCallback = jest.fn(x => 42 + x)
    component = render(<PlaylistHeader showFilter onFilter={mockCallback} />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })

  it('should display filter input', () => {
    const { getByText } = component
    const linkElement = getByText(/Filter/i)
    expect(linkElement).toBeInTheDocument()
  })

  // TODO: fix test
  xit('should call onFilter method', () => {
    const { getByTestId } = component
    const inputElement = getByTestId(/playlist-filter-adornment/i)
    fireEvent.change(inputElement, { target: { value: '23' } })

    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
