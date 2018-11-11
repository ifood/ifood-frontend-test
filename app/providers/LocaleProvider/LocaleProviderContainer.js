import { connect } from 'react-redux';
import LocaleProvider from './LocaleProvider';
import { LOCALE_PROVIDER_REDUCERS_NAME } from './LocaleProviderReducers';

const mapStateToProps = state => ({
  locale: state[LOCALE_PROVIDER_REDUCERS_NAME].locale,
});

const LocaleProviderContainer = connect(mapStateToProps)(LocaleProvider);

export default LocaleProviderContainer;
