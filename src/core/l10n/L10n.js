import { format } from 'date-fns';
import { Locales, Messages } from './L10n.config';

const DEFAULT_LOCALE = 'en-US';

function getMessagesByLocale(locale) {
  const [lang] = locale != null ? locale.split('-') : [];
  return Messages[locale] || Messages[lang] || Messages.default;
}

function getLocale() {
  const suportedLocale = [DEFAULT_LOCALE, 'pt-BR'];
  const locale = navigator.language;
  if (suportedLocale.includes(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}

function formatDate(date, dateFormat) {
  const locale = getLocale();
  const dateFnsLocale = Locales[locale] || Locales.default;
  return format(date, dateFormat, { locale: dateFnsLocale });
}

function dashlizeLanguage(language) {
  return language?.trim().replace('_', '-');
}

function getLanguageName(language) {
  if (language == null) {
    return null;
  }
  const languageNames = new Intl.DisplayNames([getLocale()], {
    type: 'language',
  });

  try {
    return languageNames.of(dashlizeLanguage(language));
  } catch (error) {
    return null;
  }
}

export { getMessagesByLocale, formatDate, getLocale, getLanguageName };
