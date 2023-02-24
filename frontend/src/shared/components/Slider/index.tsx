/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography } from '@mui/material';
import { settings } from 'shared/constants';
import useStyles from './styles';
import SliderItem from './SliderItem';
import { SliderData } from './utils';

const ResponsiveSlider = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="accentDecorated">
        {t(keys.common.slider.headline)}
      </Typography>
      <Slider {...settings}>
        {SliderData.map((item, idx) => (
          <SliderItem
            key={item.id}
            title={item.title}
            content={item.content}
            calories={item.calories}
            time={item.time}
            picture={item.picture}
            className={`slide-${idx}`}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default ResponsiveSlider;
