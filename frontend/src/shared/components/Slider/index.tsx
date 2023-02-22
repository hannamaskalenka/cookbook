/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Theme, Typography } from '@mui/material';
import Steak from 'shared/assets/images/steak';
import useStyles from './styles';
import CustomContainer from './Container';

const ResponsiveSlider = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className={classes.root}>
      <Typography variant="accentDecorated"> Popular now</Typography>
      <Slider {...settings}>
        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.green,
          }}
        />
        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.red,
          }}
        />

        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.blue,
          }}
        />

        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.grey,
          }}
        />
        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.green,
          }}
        />
        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.neutrals.red,
          }}
        />

        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: any) => theme.palette.neutrals.blue,
          }}
        />

        <CustomContainer
          title={t(keys.common.slider.title)}
          content={t(keys.common.slider.content)}
          time={t(keys.common.slider.time)}
          calories={t(keys.common.slider.calories)}
          picture={<Steak />}
          sx={{
            backgroundColor: (theme: any) => theme.palette.neutrals.grey,
          }}
        />
      </Slider>
    </Container>
  );
};

export default ResponsiveSlider;
