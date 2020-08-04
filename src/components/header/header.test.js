/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'
import Header from '.'

describe('<Header />', () => {
  const mockFunc = jest.fn()

  it('Should render the component', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Header handleChange={mockFunc}/>
      </ThemeProvider>
    )

    const element = container.querySelector('header')
    expect(element.tagName).toBe('HEADER')
  })
})
