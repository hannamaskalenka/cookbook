import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
      width: '100%',
    },
    image: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    accent: {
      color: theme.palette.neutrals.green,
    },
    block: {
      display: 'block',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  }),
);

export default useStyles;
