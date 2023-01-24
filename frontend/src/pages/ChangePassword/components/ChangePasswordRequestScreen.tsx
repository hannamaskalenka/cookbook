import React from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import forgotPasswordCookie from 'assets/images/change-password-img.png';
import { Control, Controller, FieldValues } from 'react-hook-form';
import Button from 'shared/components/Button';
import useStyles from '../styles';

interface ChangePasswordRequestScreenProps {
  control: Control<FieldValues, any>;
  isRequestLoading?: boolean;
  sendChangePasswordRequest: () => void;
}

const ChangePasswordRequestScreen: React.FC<
  ChangePasswordRequestScreenProps
> = ({ control, isRequestLoading, sendChangePasswordRequest }) => {
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
      </Grid>
      <Grid item xs={8} md={6} className={classes.imageContainer}>
        <img src={forgotPasswordCookie} alt="Forgot password cookie" />
      </Grid>
    </Grid>
  );
};

export default ChangePasswordRequestScreen;
