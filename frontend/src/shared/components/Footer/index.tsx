import { Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import Logo from '../Logo';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item sm={4}>
        <Logo className={classes.icon} isFooter />
      </Grid>
      <Grid
        item
        container
        sm={7}
        alignItems="center"
        justifyContent="space-between"
        className={classes.menuContainer}
      >
        <Grid className={classes.menuItem} item sm={2}>
          <Typography variant="accent">about us</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="accent">support</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="accent">policies</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="accent">contact</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;
