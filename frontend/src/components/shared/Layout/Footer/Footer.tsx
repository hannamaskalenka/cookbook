import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from 'assets/images/logo-footer.png';
import LogoMobile from 'assets/images/logo-mobile.png';
import { Link } from 'react-router-dom';
import MatchMedia from '../MatchMedia';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        <Grid item xs={4}>
          <MatchMedia media="(max-width: 60rem)">
            {(isMatched) => (
              <Link to="/">
                {isMatched ? (
                  <img src={LogoMobile} alt="logo" />
                ) : (
                  <img src={Logo} alt="logo" />
                )}
              </Link>
            )}
          </MatchMedia>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.accent,
              letterSpacing: '0.1em',
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            about us
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.accent,
              letterSpacing: '0.1em',
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            support
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.accent,
              letterSpacing: '0.1em',
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            policies
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.accent,
              letterSpacing: '0.1em',
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            contact
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
