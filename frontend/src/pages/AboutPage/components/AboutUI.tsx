import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { Typography, Container, Grid, Box } from '@mui/material';
import AboutImg from 'shared/assets/images/about';
import PanImg from 'shared/assets/images/pan';
import CustomButton from 'shared/components/Button';
import useStyles from '../styles';
import Card from './cards/Card';
import { CardsData } from '../data';
import CardAlternative from './cards/CardAlternative';

const AboutUI = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container flexDirection="row" className={classes.hero}>
        <Grid item lg={7} md={12} className={classes.textContainer}>
          <Container className={classes.headline}>
            <PanImg className={classes.headImg} />
            <Typography variant="headline">{t(keys.about.headline)}</Typography>
          </Container>
          <Container className={classes.text}>
            <Typography variant="regular">{t(keys.about.text)}</Typography>
            <Typography variant="regular">{t(keys.about.text)}</Typography>
            <CustomButton
              variant="contained"
              label={t(keys.about.btn)}
              className={classes.btn}
            />
          </Container>
        </Grid>
        <Grid item lg={5} md={0} className={classes.imgContainer}>
          <AboutImg className={classes.img} />
        </Grid>
      </Grid>
      <Typography variant="headline" className={classes.heading}>
        {t(keys.about.sub)}
      </Typography>
      <Box className={classes.cardsContainer}>
        {CardsData.map((item) => {
          return item.id === 1 ? (
            <Card
              name={item.name}
              content={item.content}
              picture={item.picture}
              interests={item.interests}
            />
          ) : (
            <CardAlternative
              name={item.name}
              content={item.content}
              picture={item.picture}
              interests={item.interests}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default AboutUI;
