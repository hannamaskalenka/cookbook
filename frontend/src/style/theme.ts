import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E3E3E',
      light: '#959595',
      dark: '#000000',
    },
    background: {
      default: '#679278',
      paper: '#D3EBC7',
    },
    secondary: {
      main: '#FEF7EC',
      light: '#F5D6CE',
      dark: '#DAD5C9',
    },
    neutrals: {
      blue: '#FEF7EC',
      red: '#F5D6CE',
      grey: '#DAD5C9',
    },
    accent: {
      main: '#A13702',
      light: '#C9957',
      dark: '#812C02',
    },
    common: {
      white: '#FCFCFC',
      black: '#3E3E3E',
    },
    icons: {
      default: '#3E3E3E',
      accent: '#679278',
      inactive: '#B4B0A8',
      alternative: '#FFFFFF',
    },
    text: {
      primary: '#3E3E3E',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    display: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
    },
    regular: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    accent: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
  },
});

export default theme;
