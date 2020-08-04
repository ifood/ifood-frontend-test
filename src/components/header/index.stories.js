import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'

import Header from '.'
import Search from '../search'

export default {
  title: 'Header',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      {storyFn()}
    </ThemeProvider>
  )]
}

export const Default = () => <Header />

export const WithChildren = () => (
  <Header>
    <Search />
  </Header>
)
