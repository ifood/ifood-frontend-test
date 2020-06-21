import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { enUs, ptBr } from './locales'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt_BR',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "pt_BR": ptBr,
      "en_US": enUs
    }
  })

export default i18n
