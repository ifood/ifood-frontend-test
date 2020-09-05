import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
