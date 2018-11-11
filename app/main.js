import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import LocaleProvider from './providers/LocaleProvider';
import appRoutes from './routes';
import './styles/main.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider>
      <BrowserRouter>
        {appRoutes(store)}
      </BrowserRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('app'),
);
