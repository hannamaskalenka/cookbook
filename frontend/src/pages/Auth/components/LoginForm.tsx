/* eslint-disable react/no-unescaped-entities */
import { FC, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from '@mui/material';
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
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useStyles from '../styles';
import { AuthMode } from '../constants';
import { LoginDataProps, LoginFormProps } from '../interfaces';

const LoginForm: FC<LoginFormProps> = ({
  setMode,
  isLoginSuccess,
  isLoginLoading,
  login,
}) => {
  const { handleSubmit, control } = useForm<LoginDataProps>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    if (isLoginSuccess) {
      navigate(ROUTES.dashboard);
    }
  });

  const onSubmit: SubmitHandler<LoginDataProps> = (data) => {
    login(data);
  };

  return (
    <Grid className={classes.root} container item>
      <Grid
        item
        container
        direction="column"
        className={classes.gridItem}
        xs={12}
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
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }: any) => (
                <TextField
                  InputProps={{ disableUnderline: true }}
                  variant="filled"
                  type="text"
                  placeholder={t(keys.common.login.usernameValue) || ''}
                  value={value}
                  className={classes.input}
                  onChange={onChange}
                />
              )}
            />
          </Stack>
          <Stack className={classes.inputContainer}>
            <Typography variant="regular" className={classes.label}>
              {t(keys.common.login.passwordLabel)}
            </Typography>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }: any) => (
                <TextField
                  InputProps={{ disableUnderline: true }}
                  variant="filled"
                  type="password"
                  placeholder={t(keys.common.login.passwordValue) || ''}
                  value={value}
                  className={classes.input}
                  onChange={onChange}
                />
              )}
            />
          </Stack>
          {isLoginLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              label={
                <Typography variant="contrast">
                  {t(keys.common.login.signinButton)}
                </Typography>
              }
            />
          )}
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
              onClick={() => setMode(AuthMode.signup)}
              variant="text"
              label={
                <Typography variant="accent" className={classes.label}>
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
  );
};

export default LoginForm;
