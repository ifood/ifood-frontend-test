import React from 'react'
import { render } from '@testing-library/react'
import { InputSelect } from '.'

describe('InputSelect', () => {
  let component

  beforeEach(() => {
    const props = {
      options: [
        {
          name: 'Option 1',
          value: '1'
        },
        {
          name: 'Option 2',
          value: '2'
        }
      ],
      id: '1',
      name: 'country',
      label: 'Country',
      value: '1',
      onChange: jest.fn(x => x)
    }

    component = render(<InputSelect {...props} />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
