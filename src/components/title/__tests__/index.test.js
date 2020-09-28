import React from 'react'
import { render } from '@testing-library/react'

import Title from '../index'

describe('<Title />', () => {
  it('Snapshot testing title', () => {
    const { asFragment } = render(<Title />)

    expect(asFragment()).toMatchSnapshot()
  })
})
