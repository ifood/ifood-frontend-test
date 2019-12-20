import React from 'react'
import { render } from '@testing-library/react'
import { InputInteger } from '.'

describe('InputInteger', () => {
  let component

  beforeEach(() => {
    const props = {
      id: 'country',
      name: 'country',
      label: 'Country',
      value: 1,
      onChange: jest.fn(x => x)
    }

    component = render(<InputInteger {...props} />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
