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
          paddingTop: 0,
          boxSizing: 'border-box',
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderBottomColor: 'transparent',
          },
          '&:hover:not': {
            borderBottomColor: 'transparent',
          },
        },
        input: {
          padding: 0,
          '&:focus': {
            borderBottomColor: 'transparent',
          },
        },
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
            backgroundColor: theme.palette.accent.main,
            color: theme.palette.secondary.main,
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
                backgroundColor: 'transparent',
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
              return common;
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
      blue: '#D8E3F4',
      red: '#F5D6CE',
      grey: '#DAD5C9',
      green: '#D3EBC7',
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
      fontSize: '5.3rem',
    },
    headline: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      fontSize: '3rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
    },
    title: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      fontSize: '2rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
    },
    accentDecorated: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      fontSize: '1.2rem',
    },
    regular: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      letterSpacing: '0.05rem',
      fontSize: '1rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.75rem',
      },
    },
    accent: {
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
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
