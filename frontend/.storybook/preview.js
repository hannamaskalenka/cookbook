import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import theme from '../src/style/theme';
import i18n from '../src/locales/i18n';
import { I18nextProvider } from 'react-i18next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>{story()}</BrowserRouter>
    </ThemeProvider>
  </I18nextProvider>
));
