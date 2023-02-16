/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Grid, Typography, Stack, CircularProgress } from '@mui/material';
import Button from 'shared/components/Button';
import LoginImg from 'assets/images/login';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { ROUTES } from 'shared/constants';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import SocialMedia from 'shared/components/SocialMedia';
import CustomInput from 'shared/components/Input';
import AuthLayout from 'shared/components/AuthLayout';
import { useNavigate } from 'react-router-dom';
import useStyles from '../styles';
import { LoginDataProps, LoginFormProps } from '../interfaces';

const LoginForm: FC<LoginFormProps> = ({
  switchToSignUp,
  isLoginLoading,
  login,
}) => {
  const { handleSubmit, control } = useForm<LoginDataProps>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();

  const onSubmit: SubmitHandler<LoginDataProps> = (data) => {
    login(data);
  };

  return (
    <AuthLayout image={<LoginImg />}>
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
                  onChange={onChange}
                  className={{ label: classes.passwordInputLabelContainer }}
                >
                  {t(keys.common.login.passwordLabel)}
                  <Button
                    variant="text"
                    color="warning"
                    classnames={{ button: classes.forgotPasswordRequestLink }}
                    onClick={() => navigate(ROUTES.forgotPasswordRequest)}
                    label={
                      <Typography
                        variant="contrast"
                        className={classes.forgotPasswordLinkLabel}
                      >
                        {t(keys.common.login.forgotPasswordLink)}
                      </Typography>
                    }
                  />
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
                  {t(keys.common.login.signInButton)}
                </Typography>
              }
            />
          )}
          <SocialMedia handleSignUpSwitch={switchToSignUp} />
        </Stack>
      </Grid>
    </AuthLayout>
  );
};

export default LoginForm;
