import React from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import forgotPasswordCookie from 'assets/images/change-password-img.png';
import { Control, Controller, FieldValues } from 'react-hook-form';
import Button from 'shared/components/Button';
import keys from 'locales/keys';
import { useTranslation } from 'react-i18next';
import AuthLayout from 'shared/components/AuthLayout';
import SocialMedia from 'shared/components/SocialMedia';
import { AuthMode } from 'pages/Auth/constants';
import CustomInput from 'shared/components/Input';
import useStyles from '../styles';

interface ChangePasswordRequestScreenProps {
  control: Control<FieldValues, any>;
  isRequestLoading?: boolean;
  switchToLogin: () => void;
  sendChangePasswordRequest: () => void;
}

const ChangePasswordRequestScreen: React.FC<
  ChangePasswordRequestScreenProps
> = ({
  control,
  isRequestLoading,
  sendChangePasswordRequest,
  switchToLogin,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <AuthLayout
      image={<img src={forgotPasswordCookie} alt="Forgot password cookie" />}
    >
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={6}
        className={classes.formContainer}
      >
        <Typography variant="headline" className={classes.title}>
          {t(keys.common.forgotPassword.title)}
        </Typography>
        <Typography variant="accent" className={classes.subtitle}>
          {t(keys.common.forgotPassword.subtitle)}
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }: any) => (
            <CustomInput
              className={{ input: classes.emailInput }}
              type="email"
              placeholder={t(keys.common.forgotPassword.fieldPlaceholder) || ''}
              value={value}
              onChange={onChange}
            />
          )}
        />
        {isRequestLoading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            color="primary"
            classnames={{ button: classes.button }}
            onClick={sendChangePasswordRequest}
            label={
              <Typography variant="contrast">
                {t(keys.common.forgotPassword.buttonText)}
              </Typography>
            }
          />
        )}

        <SocialMedia handleLoginSwitch={switchToLogin} mode={AuthMode.signup} />
      </Grid>
    </AuthLayout>
  );
};

export default ChangePasswordRequestScreen;
