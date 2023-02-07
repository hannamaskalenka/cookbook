/* eslint-disable react/no-unescaped-entities */
import { FC, useEffect } from 'react';
import { Grid, Typography, Stack, CircularProgress } from '@mui/material';
import Button from 'shared/components/Button';
import LoginImg from 'shared/assets/images/login';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import SocialMedia from 'shared/components/SocialMedia';
import CustomInput from 'shared/components/Input';
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
  const handleSignupSwitch = () => {
    setMode(AuthMode.signup);
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
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }: any) => (
              <CustomInput
                type="text"
                placeholder={t(keys.common.login.usernameValue) || ''}
                value={value}
                className={{ input: classes.input }}
                onChange={onChange}
              >
                {t(keys.common.login.usernameLabel)}
              </CustomInput>
            )}
          />

          <Stack className={classes.inputContainer}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }: any) => (
                <CustomInput
                  type="password"
                  placeholder={t(keys.common.login.passwordValue) || ''}
                  value={value}
                  className={{ input: classes.input }}
                  onChange={onChange}
                >
                  {t(keys.common.login.passwordLabel)}
                </CustomInput>
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
          <SocialMedia handleSignupSwitch={handleSignupSwitch} />
        </Stack>
      </Grid>
      <Grid item xs={8} md={6} className={classes.imageContainer}>
        <LoginImg className={classes.image} width={550} />
      </Grid>
    </Grid>
  );
};

export default LoginForm;
