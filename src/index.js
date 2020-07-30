import './styles/less/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment-timezone';
import jstz from 'jstimezonedetect';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n';

import Config from './app/config/app.config';

import i18nDictionary from './i18n';
import initalizeRedux from './app/redux';
import Routes from './app/routes';

const redux = initalizeRedux();


try {
  const tz = jstz.determine();
  const timezone = tz.name() || Config.timezone;
  let { language } = Config.language;
  if (!i18nDictionary[language]) ({ language } = Config);

  // initialize react-redux-i18n
  syncTranslationWithStore(redux);
  redux.dispatch(loadTranslations(i18nDictionary));
  redux.dispatch(setLocale(language));

  moment.tz.setDefault(timezone);
  moment.locale(language);
} catch (err) {
  // Redirect to error page
}

ReactDOM.render(
  <Provider store={redux}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
