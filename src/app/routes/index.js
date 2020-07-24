import { Router } from '@reach/router';
import React from 'react';
import { I18n } from 'react-redux-i18n';
import Public from './Public';
import Login from '../../containers/login';

const Content = () => (
  <Router>
    <Public
      path={I18n.t('routes.login.url')}
      container={<Login />}
      title={`${I18n.t('routes.login.pageTitle')} - ${I18n.t('application.name')}`}
    />
  </Router>
);

export default Content;
