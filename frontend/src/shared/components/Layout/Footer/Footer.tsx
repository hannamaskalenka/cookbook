import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from 'assets/images/logo-footer.svg';
import LogoMobile from 'assets/images/logo-mobile.svg';
import { Picture } from './styled';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        <Grid item xs={4}>
          <Picture>
            <source media="(min-width:1024px)" srcSet={Logo} />
            <img src={LogoMobile} alt="logo" />
          </Picture>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="accent"
            sx={{
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            about us
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="accent"
            sx={{
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            support
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="accent"
            sx={{
              fontSize: { xs: '0.65rem', sm: '1rem' },
            }}
          >
            policies
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="accent"
            sx={{
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
