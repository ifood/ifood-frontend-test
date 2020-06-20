import React from 'react'
import { render, cleanup, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Button } from '@project'

describe('UI/Button', () => {

  afterEach(cleanup)

  it('should render properly', () => {
    const { getByText } = render(
      <Button>ok</Button>
    )

    expect(getByText('ok')).toBeDefined()
  })

  it('should render with a specific color', () => {
    const { getByText } = render(
      <Button
        primaryColor="#000"
        secondaryColor="#fff"
      >
        ok
      </Button>
    )

    const button = getByText('ok')
    expect(button).toHaveStyle('background-color: #000')
    expect(button).toHaveStyle('color: #fff')
  })

  it('should trigger click event', () => {
    const handleClickMock = jest.fn()
    const { getByText } = render(
      <Button
        onClick={handleClickMock}
      >
        ok
      </Button>
    )

    fireEvent.click(getByText('ok'))
    expect(handleClickMock).toHaveBeenCalled()
  })
})
