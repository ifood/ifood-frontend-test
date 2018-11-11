import { saveToLocalStorage } from './localStorage';
import { LOCALE_PROVIDER_REDUX_NAME } from 'Providers/LocaleProvider/modules/LocaleProviderRedux';

function compareLocale(currentLocale, nextLocale) {
  try {
    return JSON.stringify(currentLocale) !== JSON.stringify(nextLocale);
  } catch (e) {
    return true;
  }
}

// Redux recomendation on how to subscribe to store changes
// https://github.com/reduxjs/redux/issues/303#issuecomment-125184409
export default function subscribeStore(store) {
  let currentLocale = null;

  function handleChanges() {
    const reduxStore = store.getState();
    const nextLocale = reduxStore[LOCALE_PROVIDER_REDUX_NAME];

    if (compareLocale(currentLocale, nextLocale)) {
      currentLocale = nextLocale;
      saveToLocalStorage({
        [LOCALE_PROVIDER_REDUX_NAME]: currentLocale,
      });
    }
  }

  const unsubscribe = store.subscribe(handleChanges);
  handleChanges();

  return unsubscribe;
}
