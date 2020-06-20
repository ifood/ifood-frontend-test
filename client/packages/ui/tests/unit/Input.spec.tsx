import React from 'react'
import { render, cleanup, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Input } from '@project'
import { withInputState } from '../utils'

describe('UI/Input', () => {

  afterEach(cleanup)

  it('should render properly', () => {
    const InputWithState = withInputState(Input)
    const { getByPlaceholderText } = render(
      <InputWithState
        placeholder="my input"
      />
    )

    expect(getByPlaceholderText('my input')).toBeDefined()
  })

  it('should render in error state', () => {
    const InputWithState = withInputState(Input)
    const { getByText } = render(
      <InputWithState
        errorMessage="There's an error here!"
      />
    )

    expect(getByText('There\'s an error here!')).toBeDefined()
  })

  it('should persist value state', () => {
    const InputWithState = withInputState(Input)
    const { getByPlaceholderText, getByDisplayValue } = render(
      <InputWithState
        placeholder="my input"
      />
    )

    const input = getByPlaceholderText('my input')
    fireEvent.change(input, { target: { value: 'typing...' } })

    expect(getByDisplayValue('typing...')).toBeDefined()
  })
})
