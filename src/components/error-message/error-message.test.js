import React from 'react'
import { render } from '@testing-library/react'
import { ErrorMessage } from '.'

describe('ErrorMessage', () => {
  let component

  beforeEach(() => {
    component = render(<ErrorMessage />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
