import { FC } from 'react';
import { Grid, Typography, Stack, Container } from '@mui/material';
import Button from 'shared/components/Button';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import SocialMedia from 'pages/Auth/components/SocialMedia';
import CustomInput from 'shared/components/Input';
import useStyles from '../styles';
import { AuthMode } from '../constants';
import { SignupDataProps, SignupFormProps } from '../interfaces';

const Signup: FC<SignupFormProps> = ({ signup, setMode, mode }) => {
  const { handleSubmit, control } = useForm<SignupDataProps>();
  const { t } = useTranslation();
  const classes = useStyles();
  const onSubmit: SubmitHandler<SignupDataProps> = (data) => {
    signup(data);
    // TODO: Success message on submit
  };

  const handleLoginSwitch = () => {
    setMode(AuthMode.login);
  };

  return (
    <Container className={classes.root}>
      <Stack className={classes.gridItem}>
        <Typography variant="headline">
          {t(keys.common.signup.headline)}
        </Typography>
        <Typography variant="regular">{t(keys.common.signup.sub)}</Typography>

        <Grid container item>
          <Grid
            item
            container
            direction="column"
            className={classes.gridItem}
            xs={12}
            md={6}
          >
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }: any) => (
                <CustomInput
                  variant="filled"
                  type="text"
                  placeholder={t(keys.common.signup.usernameValue) || ''}
                  value={value}
                  className={classes.input}
                  onChange={onChange}
                >
                  {t(keys.common.signup.usernameLabel)}
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
                    variant="filled"
                    type="password"
                    placeholder={t(keys.common.signup.passwordValue) || ''}
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  >
                    {t(keys.common.signup.passwordLabel)}
                  </CustomInput>
                )}
              />
            </Stack>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.gridItem}
            xs={12}
            md={6}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }: any) => (
                <CustomInput
                  variant="filled"
                  type="email"
                  placeholder={t(keys.common.signup.emailValue) || ''}
                  value={value}
                  className={classes.input}
                  onChange={onChange}
                >
                  {t(keys.common.signup.emailLabel)}
                </CustomInput>
              )}
            />
            <Stack className={classes.inputContainer}>
              <Controller
                name="retypedPassword"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }: any) => (
                  <CustomInput
                    variant="filled"
                    type="password"
                    placeholder={
                      t(keys.common.signup.retypePasswordValue) || ''
                    }
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  >
                    {t(keys.common.signup.retypePasswordLabel)}
                  </CustomInput>
                )}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack className={classes.actionContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            label={
              <Typography variant="contrast">
                {t(keys.common.signup.signupButton)}
              </Typography>
            }
          />
          <SocialMedia handleLoginSwitch={handleLoginSwitch} mode={mode} />
        </Stack>
      </Stack>
    </Container>
  );
};
export default Signup;
