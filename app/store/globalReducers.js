import LocaleProviderReducers,
{ LOCALE_PROVIDER_REDUX_NAME } from 'Providers/LocaleProvider/modules/LocaleProviderRedux';
import AuthRedux, { AUTH_REDUX_NAME } from '../routes/Auth/modules/AuthRedux'

export default {
  [LOCALE_PROVIDER_REDUX_NAME]: LocaleProviderReducers,
  [AUTH_REDUX_NAME]: AuthRedux,
};
