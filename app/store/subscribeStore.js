import { saveToLocalStorage } from './localStorage';
import { LOCALE_PROVIDER_REDUX_NAME } from 'Providers/LocaleProvider/modules/LocaleProviderRedux';
import { AUTH_REDUX_NAME } from '../routes/Auth/modules/AuthRedux';

function compareLocale(currentLocale, nextLocale) {
  try {
    return JSON.stringify(currentLocale) !== JSON.stringify(nextLocale);
  } catch (e) {
    return true;
  }
}

function compareAuth(currentAuth, nextAuth) {
  try {
    return JSON.stringify(currentAuth) !== JSON.stringify(nextAuth);
  } catch (e) {
    return true;
  }
}

// Redux recomendation on how to subscribe to store changes
// https://github.com/reduxjs/redux/issues/303#issuecomment-125184409
export default function subscribeStore(store) {
  let currentLocale = null;
  let currentAuth = null;

  function handleChanges() {
    const reduxStore = store.getState();
    const nextLocale = reduxStore[LOCALE_PROVIDER_REDUX_NAME];
    const nextAuth = reduxStore[AUTH_REDUX_NAME];

    if (compareLocale(currentLocale, nextLocale)
      || compareAuth(currentAuth, nextAuth)) {
      currentLocale = nextLocale;
      currentAuth = nextAuth;
      saveToLocalStorage({
        [LOCALE_PROVIDER_REDUX_NAME]: currentLocale,
        [AUTH_REDUX_NAME]: currentAuth,
      });
    }
  }

  const unsubscribe = store.subscribe(handleChanges);
  handleChanges();

  return unsubscribe;
}
