/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../../styles/theme'
import Pagination from '.'

describe('<Pagination />', () => {
  const mockFunc = jest.fn()

  it('Should render the component', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Pagination totalItems={20} limit={5} onSubmitPagination={mockFunc}/>
      </ThemeProvider>
    )

    const element = container.querySelector('section')
    expect(element.tagName).toBe('SECTION')
  })

  it('Should not render children when totalItems=0 and limit=x', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Pagination totalItems={0} limit={5} onSubmitPagination={mockFunc}/>
      </ThemeProvider>
    )

    const li = container.querySelectorAll('li')
    expect(li.length).toBe(0)
  })

  it('Should render 4 children when totalItems=20 and limit=5', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Pagination totalItems={20} limit={5} onSubmitPagination={mockFunc}/>
      </ThemeProvider>
    )

    const li = container.querySelectorAll('li')
    expect(li.length).toBe(4)
  })
})
