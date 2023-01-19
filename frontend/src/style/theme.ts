/* eslint-disable import/no-mutable-exports */
import { createTheme } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: 'relative',
          color: '#FCFCFC',
          backgroundColor: '#679278',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: 'transparent',
          },
          '&:hover:not(.Mui-disabled)::before': {
            borderBottomColor: 'transparent',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => {
          const common = {
            width: '100%',
          };
          switch (ownerState.variant) {
            case 'contained':
              return {
                ...common,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                padding: theme.spacing(1.25),
              };
            case 'text':
              return {
                ...common,
                color: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                },
              };
            case 'outlined':
              return {
                ...common,
                border: `${theme.spacing(0.5)} solid ${
                  theme.palette.background.paper
                }`,
              };
            default:
              return {
                common,
              };
          }
        },
      },
    },
  },
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
      light: '#FFFFFF',
      dark: '#DAD5C9',
    },
    neutrals: {
      blue: '#FEF7EC',
      red: '#F5D6CE',
      grey: '#DAD5C9',
      green: '#E8F2E3',
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
    headline: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      fontSize: '3rem',
    },
    regular: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      letterSpacing: '0.05rem',
      fontSize: '1rem',
    },
    accent: {
      fontFamily: 'Poppins',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.05rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.75rem',
      },
    },
    contrast: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
  },
});

export default theme;
