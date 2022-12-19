import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { StyledFooter, GridContainer, StyledHeader, Main } from './styled';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GridContainer>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <Main>{children}</Main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </GridContainer>
  );
};
export default Layout;
