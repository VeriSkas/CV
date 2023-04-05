import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './ru/translation.json';
import en from './en/translation.json';
import { SupportedLanguages } from 'constants/constants';

void i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  supportedLngs: [SupportedLanguages.en, SupportedLanguages.ru],
  fallbackLng: SupportedLanguages.en,
  interpolation: {
    escapeValue: false,
  },
});
