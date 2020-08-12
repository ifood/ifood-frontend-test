/**
 * IMPORTS
 */
import React from 'react';
import {transitions} from 'react-alert';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * STYLES
 */
import './index.css';
const alertOptions = {
    offset: '30px',
    transition: transitions.SCALE,
    timeout: 5000
  };

/**
 * CODE
 */
ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </AlertProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
