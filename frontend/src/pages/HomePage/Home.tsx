import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeImg from 'shared/assets/images/home';
import SearchBar from 'shared/components/SearchBar';
import Slider from 'shared/components/Slider';
import useStyles from './styles';

const Home = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item container direction="column" xs={12} md={6}>
        <Typography variant="regular">
          {t(keys.common.homepage.uppersub)}
        </Typography>
        <Typography variant="display">
          {t(keys.common.homepage.headline)}{' '}
          <span className={classes.accent}>{t(keys.common.homepage.span)}</span>
        </Typography>
        <Typography variant="regular">{t(keys.common.homepage.sub)}</Typography>
        <SearchBar />
      </Grid>
      <Grid item className={classes.block} lg={6}>
        <HomeImg className={classes.image} />
      </Grid>
      <Slider />
    </div>
  );
};

export default Home;
