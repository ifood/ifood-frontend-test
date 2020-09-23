import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from 'states/store'

import Routes from './App.routes'

import { GlobalStyle } from 'styles/global'

const App = () => (
  <>
    <GlobalStyle />
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  </>
)

export default App
