import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'

import Loading from '.'
import Svgs from '../svgs'

export default {
  title: 'Loading',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      <Svgs />
      {storyFn()}
    </ThemeProvider>
  )]
}

export const Default = () => <Loading isLoading />
