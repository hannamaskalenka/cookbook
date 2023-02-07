import { FC } from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from 'locales/keys';
import theme from 'style/theme';
import { Facebook, Google, Instagram } from '@mui/icons-material';
import { AuthMode } from 'pages/Auth/constants';
import useStyles from './styles';
import Button from '../Button';
import { SocialMediaProps } from './types';

const SocialMedia: FC<SocialMediaProps> = ({
  handleSignupSwitch,
  handleLoginSwitch,
  mode,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
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
      <Typography
        variant="accent"
        className={classes.paragraph}
        sx={{ color: theme.palette.icons.inactive }}
      >
        {t(keys.common.login.noAccountText)}
      </Typography>
      {mode === AuthMode.signup ? (
        <Button
          onClick={handleLoginSwitch}
          variant="text"
          label={
            <Typography variant="accent" className={classes.label}>
              {t(keys.common.signup.loginButton)}
            </Typography>
          }
        />
      ) : (
        <Button
          onClick={handleSignupSwitch}
          variant="text"
          label={
            <Typography variant="accent" className={classes.label}>
              {t(keys.common.login.signupButton)}
            </Typography>
          }
        />
      )}
    </>
  );
};
export default SocialMedia;
