/* eslint-disable import/prefer-default-export */
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { resources } from 'locales/i18n';

type Translations = keyof typeof resources['en'];

export const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/',
  });
  return api;
};

export const useTranslations = (translation: Translations) => {
  const { t } = useTranslation(translation);
  return { t };
};
