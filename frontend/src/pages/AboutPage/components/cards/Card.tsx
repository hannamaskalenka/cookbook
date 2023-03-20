import { Grid, Typography, Container } from '@mui/material';
import { FC } from 'react';
import { CardProps } from '../../interfaces';
import useStyles from '../../styles';

const Card: FC<CardProps> = ({
  name,
  content,
  picture,
  interests,
  isAlternative,
}) => {
  const classes = useStyles();
  return isAlternative ? (
    <div className={classes.cards}>
      <Grid container flexDirection="row">
        <Grid item className={classes.item} lg={7} sm={12}>
          <Typography variant="title">{name}</Typography>
          <Typography variant="regular">{content}</Typography>
        </Grid>
        <Grid item className={classes.item} lg={5} sm={12}>
          {picture}
        </Grid>
      </Grid>
      <Container className={classes.container}>
        {interests.map((interest) => (
          <div className={classes.interest} key={interest}>
            {interest}
          </div>
        ))}
      </Container>
    </div>
  ) : (
    <div className={classes.cards}>
      <Grid container flexDirection="row">
        <Grid item className={classes.item} lg={5} sm={12}>
          {picture}
        </Grid>
        <Grid item className={classes.item} lg={7} sm={12}>
          <Typography variant="title">{name}</Typography>
          <Typography variant="regular">{content}</Typography>
        </Grid>
      </Grid>
      <Container className={classes.container}>
        {interests.map((interest) => (
          <div className={classes.interest} key={interest}>
            {interest}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Card;
