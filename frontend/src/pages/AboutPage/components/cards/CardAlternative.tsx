import { Grid, Typography, Container } from '@mui/material';
import { FC } from 'react';
import { CardProps } from '../../interfaces';
import useStyles from '../../styles';
import { objectKeys } from '../../utils';

const CardAlternative: FC<CardProps> = ({
  name,
  content,
  picture,
  interests,
}) => {
  const classes = useStyles();

  return (
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
        {objectKeys(interests).map((key) => (
          <div className={classes.interest}>{interests[key]}</div>
        ))}
      </Container>
    </div>
  );
};

export default CardAlternative;
