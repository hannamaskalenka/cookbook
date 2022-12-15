import { withTheme } from '@mui/styles';
import styled from 'styled-components';

export const GridContainer = withTheme(styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
  position: relative;
  width: 100%;
  height: 100vh;
`);

export const StyledHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const Main = styled.main`
  justify-self: center;
  align-self: center;
  grid-area: main;
  width: 100%;
`;
export const StyledFooter = styled.div`
  grid-area: footer;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;
