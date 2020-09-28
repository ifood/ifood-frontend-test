import translations from '../i18n/translations';

const { language } = navigator;
const defaultLanguage = 'en-US';

export default {
  locale: language,
  defaultLocale: defaultLanguage,
  messages: translations[language],
};
