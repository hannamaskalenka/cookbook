/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from 'react';
import { Container, Grid, Typography, TextField, Stack } from '@mui/material';
import Button from 'shared/components/Button';
import LoginImg from 'shared/assets/images/login';
import {
  FacebookRounded as Facebook,
  Google,
  Instagram,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import theme from 'style/theme';
import useStyles from './styles';
import { useLoginUser } from './hooks';

const Login: FC = () => {
  const { mutate: login } = useLoginUser();
  const { t } = useTranslation();
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRequestButtonClick = async () => {
    login({ username, password });
  };

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
            <Stack className={classes.inputContainer}>
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
                <Facebook className={classes.socialMedia} />
              </Container>
              <Container className={classes.icon}>
                <Instagram className={classes.socialMedia} />
              </Container>
              <Container className={classes.icon}>
                <Google className={classes.socialMedia} />
              </Container>
            </Container>
            <Container className={classes.noAccountText}>
              <Typography
                variant="accent"
                className={classes.paragraph}
                sx={{ color: theme.palette.icons.inactive }}
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
        <Grid item xs={8} md={6} className={classes.imageContainer}>
          <LoginImg className={classes.image} width={550} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
