// eslint-disable-next-line import/no-unresolved
import '@material-ui/core/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    neutrals: {
      red: string;
      blue: string;
      grey: string;
    };
    accent: {
      main: string;
      light: string;
      dark: string;
    };
    icons: {
      default: string;
      accent: string;
      inactive: string;
      alternative: string;
    };
  }
  interface PaletteOptions {
    neutrals?: {
      red: string;
      blue: string;
      grey: string;
    };
    accent: {
      main: string;
      light: string;
      dark: string;
    };
    icons: {
      default: string;
      accent: string;
      inactive: string;
      alternative: string;
    };
  }

  interface TypographyVariants {
    display: React.CSSProperties;
    regular: React.CSSProperties;
    accent: React.CSSProperties;
    contrast: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    display: React.CSSProperties;
    regular: React.CSSProperties;
    accent: React.CSSProperties;
    contrast: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
    regular: true;
    accent: true;
    contrast: true;
  }
}
