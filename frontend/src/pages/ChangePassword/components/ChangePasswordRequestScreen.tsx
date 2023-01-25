import React from 'react';
import {
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import forgotPasswordCookie from 'assets/images/change-password-img.png';
import { Control, Controller, FieldValues } from 'react-hook-form';
import Button from 'shared/components/Button';
import { Facebook, Google, Instagram } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import useStyles from '../styles';

interface ChangePasswordRequestScreenProps {
  control: Control<FieldValues, any>;
  isRequestLoading?: boolean;
  sendChangePasswordRequest: () => void;
}

const ChangePasswordRequestScreen: React.FC<
  ChangePasswordRequestScreenProps
> = ({ control, isRequestLoading, sendChangePasswordRequest }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Grid container item className={classes.root}>
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={6}
        className={classes.formContainer}
      >
        <Typography variant="headline" className={classes.title}>
          Forgot password?
        </Typography>
        <Typography variant="accent" className={classes.subtitle}>
          Please enter your email
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }: any) => (
            <TextField
              InputProps={{ disableUnderline: true }}
              variant="filled"
              className={classes.emailInput}
              type="email"
              placeholder="Email"
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
              <Typography variant="contrast">Reset your password</Typography>
            }
          />
        )}

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="regular" className={classes.paragraph}>
            or
          </Typography>
          <Grid container item className={classes.iconContainer}>
            <Grid container item className={classes.icon}>
              <Facebook className={classes.socialMedia} />
            </Grid>
            <Grid container item className={classes.icon}>
              <Instagram className={classes.socialMedia} />
            </Grid>
            <Grid container item className={classes.icon}>
              <Google className={classes.socialMedia} />
            </Grid>
          </Grid>
          <Container className={classes.noAccountText}>
            <Typography variant="accent" className={classes.paragraph}>
              Do you want to come back?
            </Typography>
            <Button
              classnames={{ button: classes.linkButton }}
              variant="text"
              onClick={() => navigate(ROUTES.login)}
              label={
                <Typography variant="accent" className={classes.label}>
                  Log in
                </Typography>
              }
            />
          </Container>
        </Grid>
      </Grid>
      <Grid item md={6} className={classes.imageContainer}>
        <img src={forgotPasswordCookie} alt="Forgot password cookie" />
      </Grid>
    </Grid>
  );
};

export default ChangePasswordRequestScreen;
