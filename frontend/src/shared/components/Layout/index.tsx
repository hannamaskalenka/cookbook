import { Grid } from '@mui/material';
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid container item justifyContent="center">
        <Navbar />
        <Grid
          container
          justifyContent="center"
          sx={{
            padding: (theme) => {
              return {
                md: theme.spacing(4, 10),
                xs: theme.spacing(4, 1.2, 1.2),
              };
            },
            width: '100%',
          }}
        >
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
export default Layout;
