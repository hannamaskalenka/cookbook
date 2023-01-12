import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageKeysEnum } from 'shared/constants';
import en from './translations/en';

export const resources = {
  en,
};

const DEFAULT_LOCALE: string = LanguageKeysEnum.en;

i18n.use(initReactI18next).init({
  resources,
  ns: 'translations',
  lng: LanguageKeysEnum.en,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
});

export default i18n;
