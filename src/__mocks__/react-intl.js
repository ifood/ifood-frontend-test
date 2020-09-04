import React from 'react';

function useIntl() {
  return {
    formatMessage: jest.fn().mockImplementation(({ id }) => `intl::${id}`),
  };
}

const FormattedMessage = () => null;

/* eslint-disable-next-line */
const IntlProvider = ({ children }) => <div>{children}</div>;

export { useIntl, FormattedMessage, IntlProvider };
