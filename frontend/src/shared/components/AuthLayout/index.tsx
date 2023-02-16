import { FC } from 'react';
import Grid from '@mui/material/Grid/Grid';
import useStyles from './style';
import { AuthLayoutProps } from './types';

const AuthLayout: FC<AuthLayoutProps> = ({ children, image }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item>
      {children}
      {image && (
        <Grid item md={6} className={classes.imageContainer}>
          {image}
        </Grid>
      )}
    </Grid>
  );
};
export default AuthLayout;
