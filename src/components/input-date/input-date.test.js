import React from 'react'
import { render } from '@testing-library/react'
import { InputDate } from '.'

describe('InputDate', () => {
  let component

  beforeEach(() => {
    const props = {
      id: 'date',
      name: 'date',
      label: 'Date',
      value: null,
      onChange: jest.fn(x => x)
    }

    component = render(<InputDate {...props} />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
