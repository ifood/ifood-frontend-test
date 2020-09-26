import React from 'react'
import { render } from '@testing-library/react'

import Skeleton from '../index'

describe('<FilterSkeleton />', () => {
  it('Snapshot testing Filter Skeleton', () => {
    const { asFragment } = render(<Skeleton />)

    expect(asFragment()).toMatchSnapshot()
  })
})
