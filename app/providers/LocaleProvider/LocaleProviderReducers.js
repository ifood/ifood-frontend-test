import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import translations from '../../i18n';

export const LOCALE_PROVIDER_REDUCERS_NAME = 'localeProvider';
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

addLocaleData([...en, ...fr]);

const text = {
  en: translations.en,
  fr: translations.fr,
};

const language = (new URL(window.location.href)).searchParams.get('lang') ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = lang => lang.toLowerCase().split(/[_-]+/)[0];

// IntlProvide locale must be one of the locales registered with addLocaleData
const defaultLocale = Object.keys(text).indexOf(languageWithoutRegionCode(language)) !== -1
  ? languageWithoutRegionCode(language)
  : 'en';

export const switchLanguage = locale => ({
  type: SWITCH_LANGUAGE,
  locale,
});

const INITIAL_STATE = {
  locale: defaultLocale,
};

const actionHandlers = {
  [SWITCH_LANGUAGE]: (state, { locale }) => ({
    ...state, locale,
  }),
};

export default function reducer(state = INITIAL_STATE, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}
