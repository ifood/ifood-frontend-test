import React from 'react'
import { render } from '@testing-library/react'
import { Playlist } from '.'

describe('Playlist', () => {
  it('should render component correctly', () => {
    const { getByText } = render(<Playlist />)
    const linkElement = getByText(/Playlist/i)
    expect(linkElement).toBeInTheDocument()
  })
})
