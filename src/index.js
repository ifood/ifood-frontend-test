import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import rootSaga from './redux/sagas'
import rootReducers from './redux/reducer'
import Routes from './routes'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducers, enhancer)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <StrictMode>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Routes />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
