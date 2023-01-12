import { Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import Logo from '../Logo';

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');

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
          <Typography variant="accent">{t('about_us')}</Typography>
        </Grid>
        <Grid className={classes.menuItem} item sm={2}>
          <Typography variant="accent">{t('support')}</Typography>
        </Grid>
        <Grid className={classes.menuItem} item sm={2}>
          <Typography variant="accent">{t('policies')}</Typography>
        </Grid>
        <Grid className={classes.menuItem} item sm={2}>
          <Typography variant="accent">{t('support')}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;
