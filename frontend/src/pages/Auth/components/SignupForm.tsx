import { FC } from 'react';
import { Grid, Typography, Stack, Container, TextField } from '@mui/material';
import Button from 'shared/components/Button';
import {
  FacebookRounded as Facebook,
  Google,
  Instagram,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useStyles from '../styles';
import { SignupDataProps, SignupFormProps } from '../interfaces';

const Signup: FC<SignupFormProps> = ({ signup }) => {
  const { handleSubmit, control } = useForm<SignupDataProps>();
  const { t } = useTranslation();
  const classes = useStyles();

  const onSubmit: SubmitHandler<SignupDataProps> = (data) => {
    signup(data);
    // TODO: Success message on submit
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
            <Stack>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.signup.usernameLabel)}
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
                    placeholder={t(keys.common.signup.usernameValue) || ''}
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  />
                )}
              />
            </Stack>
            <Stack className={classes.inputContainer}>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.signup.passwordLabel)}
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
                    placeholder={t(keys.common.signup.passwordValue) || ''}
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  />
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
            <Stack>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.signup.emailLabel)}
              </Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }: any) => (
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    variant="filled"
                    type="email"
                    placeholder={t(keys.common.signup.emailValue) || ''}
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  />
                )}
              />
            </Stack>
            <Stack className={classes.inputContainer}>
              <Typography variant="regular" className={classes.label}>
                {t(keys.common.signup.retypePasswordLabel)}
              </Typography>
              <Controller
                name="retypedPassword"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }: any) => (
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    variant="filled"
                    type="password"
                    placeholder={
                      t(keys.common.signup.retypePasswordValue) || ''
                    }
                    value={value}
                    className={classes.input}
                    onChange={onChange}
                  />
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
        </Stack>
      </Stack>
    </Container>
  );
};
export default Signup;
