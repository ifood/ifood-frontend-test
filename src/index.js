import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { library as fontawesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCompactDisc, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import './index.css';
import App from './App';
import store from './ducks/store';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.min.css';

// setup font-awesome
fontawesomeLibrary.add(faCompactDisc, faSpotify, faCamera);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
