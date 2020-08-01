/* eslint-disable no-undef */
import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'
import Svgs from '../svgs'
import Loading from '.'

describe('<Loading />', () => {
  it('Should render the component', async () => {
    render(
      <ThemeProvider theme={Theme}>
        <Svgs />
        <Loading isLoading/>
      </ThemeProvider>
    )

    const loading = await waitForElement(() => screen.getByRole('loading'))
    expect(loading).toBeDefined()
  })
})
