import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
)

export default ProviderWrapper
