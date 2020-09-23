import React from 'react'
import { Provider } from 'react-redux'

import store from 'states/store'

import Routes from './App.routes'

import { GlobalStyle } from 'styles/global'

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
    </Provider>
  </>
)

export default App
