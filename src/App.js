import React from 'react'

import { PlaylistProvider } from '~/contexts'

import Home from '~/pages/Home'

import GlobalStyle from '~/assets/styles/GlobalStyles'

function App() {
  return (
    <PlaylistProvider>
      <GlobalStyle />

      <Home />
    </PlaylistProvider>
  )
}

export default App
