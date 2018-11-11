import React from 'react';
import PropTypes from 'prop-types';

import LocaleProviderContainer from './containers/LocaleProviderContainer';

const defaultLocaleProvider = ({ children }) => (
  <LocaleProviderContainer>
    {children}
  </LocaleProviderContainer>
);

defaultLocaleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default defaultLocaleProvider;
