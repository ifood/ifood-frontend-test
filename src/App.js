import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { store, persistor } from 'states/store'

import Routes from './App.routes'

import { GlobalStyle } from 'styles/global'

registerLocale('pt-br', ptBR)

const App = () => (
  <>
    <ToastContainer />
    <GlobalStyle />
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  </>
)

export default App
