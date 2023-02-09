import { FC } from 'react';
import Grid from '@mui/material/Grid/Grid';
import useStyles from './style';
import { AuthLayoutProps } from './types';

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item>
      {children}
    </Grid>
  );
};
export default AuthLayout;
