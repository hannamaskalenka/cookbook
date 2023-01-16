/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Container, Grid, Typography, TextField, Stack } from '@mui/material';
import Button from 'shared/components/Button';
import LoginImg from 'shared/assets/images/login';
import Facebook from 'shared/icons/FacebookIcon';
import Google from 'shared/icons/GoogleIcon';
import Instagram from 'shared/icons/InstagramIcon';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import useStyles from './styles';
import { useLoginUser } from './hooks';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login } = useLoginUser();
  const { t } = useTranslation();

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
          <Typography variant="headline">
            {t(keys.common.login.headline)}
          </Typography>
          <Typography variant="regular">{t(keys.common.login.sub)}</Typography>
          <Stack className={classes.content}>
            <Stack>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.login.usernameLabel)}
              </Typography>
              <TextField
                InputProps={{ disableUnderline: true }}
                variant="filled"
                name="username"
                placeholder={t(keys.common.login.usernameValue)}
                value={username}
                className={classes.input}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Stack>
            <Stack sx={{ marginBlockEnd: '2rem' }}>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.login.passwordLabel)}
              </Typography>
              <TextField
                InputProps={{ disableUnderline: true }}
                variant="filled"
                name="password"
                type="password"
                placeholder={t(keys.common.login.passwordValue)}
                value={password}
                className={classes.input}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Stack>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRequestButtonClick}
              label={
                <Typography variant="contrast">
                  {t(keys.common.login.signinButton)}
                </Typography>
              }
            />
            <Typography variant="accent" className={classes.paragraph}>
              {t(keys.common.login.socialmediaText)}
            </Typography>
            <Container className={classes.iconContainer}>
              <Container className={classes.icon}>
                <Facebook />
              </Container>
              <Container className={classes.icon}>
                <Instagram />
              </Container>
              <Container className={classes.icon}>
                <Google />
              </Container>
            </Container>
            <Container className={classes.noAccountText}>
              <Typography
                variant="accent"
                className={classes.paragraph}
                sx={{ color: '#B4B0A8' }}
              >
                {t(keys.common.login.noAccountText)}
              </Typography>
              <Button
                variant="text"
                label={
                  <Typography variant="accent" className={classes.paragraph}>
                    {t(keys.common.login.signupButton)}
                  </Typography>
                }
              />
            </Container>
          </Stack>
        </Grid>
        <Grid
          item
          xs={8}
          md={6}
          sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
        >
          <LoginImg className={classes.image} width={550} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
