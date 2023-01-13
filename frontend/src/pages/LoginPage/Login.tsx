/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Container, Grid, Typography, TextField, Stack } from '@mui/material';
import Button from 'shared/components/Button';
import LoginImg from 'shared/assets/images/login';
import Facebook from 'shared/icons/Facebook';
import Google from 'shared/icons/Google';
import Instagram from 'shared/icons/Instagram';
import useStyles from './styles';
import { useLoginUser } from './hooks';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login } = useLoginUser();

  const handleRequestButtonClick = async () => {
    login({ username, password });
  };

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid
          item
          container
          direction="column"
          className={classes.gridItem}
          xs={8}
          md={6}
        >
          <Typography variant="display">Welcome back</Typography>
          <Typography variant="regular">Please enter your details</Typography>
          <Stack className={classes.content}>
            <Stack>
              <Typography variant="regular" className={classes.label}>
                Username:
              </Typography>
              <TextField
                variant="filled"
                name="username"
                placeholder="Eg. John Smith"
                value={username}
                className={classes.input}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant="regular" className={classes.label}>
                Password:
              </Typography>
              <TextField
                variant="filled"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                className={classes.input}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Stack>
            <Button
              color="primary"
              onClick={handleRequestButtonClick}
              label={<Typography variant="contrast">Sign in</Typography>}
            />
            <Typography variant="accent" className={classes.paragraph}>
              or sign up with:
            </Typography>
            <Container className={classes.iconContainer}>
              <Facebook />
              <Instagram />
              <Google />
            </Container>
            <Container className={classes.noAccountText}>
              <Typography
                variant="accent"
                className={classes.paragraph}
                sx={{ color: '#B4B0A8' }}
              >
                Don't you have an account?
              </Typography>
              <Typography variant="accent" className={classes.paragraph}>
                Sign up
              </Typography>
            </Container>
          </Stack>
        </Grid>
        <Grid
          item
          xs={8}
          md={6}
          sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
        >
          <LoginImg width={550} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
