// Global
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Components
import App from './components/App';
// Store
import store from './redux/store';
// Style
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

