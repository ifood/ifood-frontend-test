import React from 'react'
import { render, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom'
import { ControlOverlay } from '@project'

describe('UI/ControlOverlay', () => {

  afterEach(cleanup)

  it('should render properly', () => {
    const { getByText } = render(
      <ControlOverlay>
        interns
      </ControlOverlay>
    )

    expect(getByText('interns')).toBeDefined()
  })
})
