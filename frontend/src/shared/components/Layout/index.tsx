import { Grid } from '@mui/material';
import { FC } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid container item>
        <Navbar />
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};
export default Layout;
