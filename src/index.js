import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './containers/App'
import playlistsPageReducer from './containers/PlaylistsPage/reducer'
import playlistsPageSaga from './containers/PlaylistsPage/saga'

import './index.css'
import * as serviceWorker from './serviceWorker'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  playlistsPageReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)
/* eslint-enable */

sagaMiddleware.run(playlistsPageSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
