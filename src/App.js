import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Theme from './styles/theme'
import Svgs from './components/svgs'

import Router from './pages/router'

function App () {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Svgs />
      <Router />
    </ThemeProvider>
  )
}

export default App
