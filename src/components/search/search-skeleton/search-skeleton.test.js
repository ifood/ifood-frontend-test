import React from 'react'
import { render } from '@testing-library/react'
import { SearchSkeleton } from '.'

describe('SearchSkeleton', () => {
  let component

  beforeEach(() => {
    component = render(<SearchSkeleton />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })
})
