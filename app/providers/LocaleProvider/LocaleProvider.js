import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import translations from '../../i18n';

class LocaleProvider extends React.Component {
  state = {
    messages: { en: translations.en, fr: translations.fr },
  };

  render() {
    const { children, locale } = this.props;
    return (
      <IntlProvider locale={locale} key={locale} messages={this.state.messages[locale]}>
        {children}
      </IntlProvider>
    );
  }
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
};

export default LocaleProvider;
