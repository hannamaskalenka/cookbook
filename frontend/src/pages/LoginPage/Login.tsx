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
import LoginImg from 'assets/images/login';
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
import useStyles from './styles';
import { useLoginUser } from './hooks';

type LoginUserData = {
  username: string;
  password: string;
};

const Login: FC = () => {
  const { handleSubmit, control } = useForm<LoginUserData>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = useStyles();

  const { mutate: login, isLoading, isSuccess } = useLoginUser();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.dashboard);
    }
  });
  const onSubmit: SubmitHandler<LoginUserData> = (data: LoginUserData) => {
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
            <Grid className={classes.passwordLabelContainer}>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.login.passwordLabel)}
              </Typography>
              <Button
                variant="text"
                onClick={() => navigate(ROUTES.forgotPasswordRequest)}
                classnames={{ button: classes.linkButton }}
                label={
                  <Typography variant="accent" className={classes.label}>
                    {t(keys.auth.forgotPassword.link)}
                  </Typography>
                }
              />
            </Grid>
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
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              label={
                <Typography variant="contrast">
                  {t(keys.common.login.signInButton)}
                </Typography>
              }
            />
          )}
          <Typography variant="accent" className={classes.paragraph}>
            {t(keys.common.login.socialMediaText)}
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
              classnames={{ button: classes.linkButton }}
              variant="text"
              label={
                <Typography variant="accent" className={classes.label}>
                  {t(keys.common.login.signUpButton)}
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

export default Login;
