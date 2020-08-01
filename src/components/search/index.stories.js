import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'

import Search from '.'

export default {
  title: 'Search',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      {storyFn()}
    </ThemeProvider>
  )]
}

const mockFunc = (e) => console.log(e)

export const Default = () => <Search handleChange={mockFunc}/>
