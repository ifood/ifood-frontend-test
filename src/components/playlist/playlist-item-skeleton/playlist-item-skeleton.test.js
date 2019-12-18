import React from 'react'
import { render } from '@testing-library/react'
import { PlaylistItemSkeleton } from '.'

describe('PlaylistItemSkeleton', () => {
  let component

  beforeEach(() => {
    component = render(<PlaylistItemSkeleton />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
