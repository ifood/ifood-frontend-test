import React from 'react'
import { render, cleanup, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { ErrorBoundary } from '@project'

describe('UI/ErrorBoundary', () => {

  afterEach(cleanup)

  it('should render properly calling a fake logger', () => {
    const handleOnErrorMock = jest.fn()
    const handleOnActionDummy = (): void => { return }
    const { getByText } = render(
      <ErrorBoundary
        onError={handleOnErrorMock}
        buttonText="Log!"
        onAction={handleOnActionDummy}
      >
        Something went wrong
      </ErrorBoundary> 
    )

    expect(getByText('Something went wrong')).toBeDefined()
    expect(getByText('Log!')).toBeDefined()
    expect(handleOnErrorMock).toHaveBeenCalled()
  })

  it('should call the action while clicking on it', () => {
    const handleOnErrorDummy = (): void => { return } 
    const handleOnActionMock = jest.fn()
    const { getByText } = render(
      <ErrorBoundary
        onError={handleOnErrorDummy}
        buttonText="Log!"
        onAction={handleOnActionMock}
      >
        Something went wrong
      </ErrorBoundary> 
    )

    fireEvent.click(getByText('Log!'))
    expect(handleOnActionMock).toHaveBeenCalled()
  })
})
