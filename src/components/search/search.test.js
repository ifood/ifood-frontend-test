/* eslint-disable no-undef */
import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'
import Search from '.'

describe('<Search />', () => {
  const mockFunc = jest.fn()

  it('Should render the component', async () => {
    render(
      <ThemeProvider theme={Theme}>
        <Search handleChange={mockFunc}/>
      </ThemeProvider>
    )

    const search = await waitForElement(() => screen.getByPlaceholderText('Search'))
    expect(search).toBeDefined()
  })
})
