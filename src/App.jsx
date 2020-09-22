import React from 'react'
import { Provider } from 'react-redux'

import store from 'states/store'

import Routes from './App.routes'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
