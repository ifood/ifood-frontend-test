import React from 'react'
import { render, cleanup, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Tag } from '@project'

describe('UI/Tag', () => {

  afterEach(cleanup)

  it('should render properly', () => {
    const handleClickDummy = (): string => "foo"
    const { getByText } = render(
      <Tag
        value="myfilter"
        onClick={handleClickDummy}
      >
        filter
      </Tag> 
    )

    expect(getByText('filter')).toBeDefined()
  })

  it('should get the value from click event', () => {
    const handleClickMock = jest.fn()
    const { getByText } = render(
      <Tag
        value="myfilter"
        onClick={handleClickMock}
      >
        filter
      </Tag> 
    )

    fireEvent.click(getByText('filter'))
    expect(handleClickMock).toHaveBeenCalledWith('myfilter')
  })
})
