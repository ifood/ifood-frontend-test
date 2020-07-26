import { Router } from '@reach/router';
import React from 'react';
import { I18n } from 'react-redux-i18n';
import Public from './Public';
import Home from '../../containers/home';

const Content = () => (
  <Router>
    <Public
      path={I18n.t('routes.home.url')}
      container={<Home />}
      title={`${I18n.t('routes.home.pageTitle')} - ${I18n.t('application.name')}`}
    />
  </Router>
);

export default Content;
