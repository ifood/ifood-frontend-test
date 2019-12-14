import React from 'react'
import { render } from '@testing-library/react'
import { ErrorMessage } from '.'

describe('ErrorMessage', () => {
  it('should render component correctly', () => {
    const { getByText } = render(<ErrorMessage />)
    const linkElement = getByText(/ErrorMessage/i)
    expect(linkElement).toBeInTheDocument()
  })
})
