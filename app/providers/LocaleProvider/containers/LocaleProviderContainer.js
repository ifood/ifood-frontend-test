import { connect } from 'react-redux';
import LocaleProvider from '../components/LocaleProvider';
import { LOCALE_PROVIDER_REDUX_NAME } from '../modules/LocaleProviderRedux';

const mapStateToProps = state => ({
  locale: state[LOCALE_PROVIDER_REDUX_NAME].locale,
});

const LocaleProviderContainer = connect(mapStateToProps)(LocaleProvider);

export default LocaleProviderContainer;
