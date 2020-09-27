import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { ToastContainer } from 'react-toastify';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { IntlProvider } from 'react-intl';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import intl from './services/i18n';

const engine = new Styletron();

ReactDOM.render(
  <IntlProvider {...intl}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <IconContext.Provider value={{ size: '1em' }}>
          <ToastContainer position="bottom-center" />
          <App />
        </IconContext.Provider>
      </BaseProvider>
    </StyletronProvider>
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
