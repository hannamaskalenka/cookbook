import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from './en/common.json';

export const resources = {
  en: {
    common: commonEN,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});
export default i18n;
