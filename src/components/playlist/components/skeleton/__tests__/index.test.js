import React from 'react'
import { render } from '@testing-library/react'

import Skeleton from '../index'

describe('<PlaylistSkeleton />', () => {
  it('Snapshot testing Playlist Skeleton', () => {
    const { asFragment } = render(<Skeleton />)

    expect(asFragment()).toMatchSnapshot()
  })
})
