import { Grid, Typography, Container } from '@mui/material';
import { FC } from 'react';
import useStyles from '../styles';
import { SliderContainerProps } from './types';

const SliderItem: FC<SliderContainerProps> = ({
  title,
  content,
  time,
  picture,
  calories,
  sx,
  className,
}) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.items} ${className}`} sx={sx}>
      <Grid item direction="column" md={6}>
        <div>{picture}</div>
        <Typography variant="contrast">{calories}</Typography>
      </Grid>
      <Grid item className={classes.content} direction="column" md={6}>
        <Typography variant="accentDecorated">{title}</Typography>
        <Typography variant="contrast">{content}</Typography>
        <Container className={classes.time}>
          <Typography variant="contrast">{time}</Typography>
        </Container>
      </Grid>
    </Container>
  );
};

export default SliderItem;
