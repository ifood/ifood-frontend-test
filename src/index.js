import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <IconContext.Provider>
    <ToastContainer position="bottom-center" />
    <App />
  </IconContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
