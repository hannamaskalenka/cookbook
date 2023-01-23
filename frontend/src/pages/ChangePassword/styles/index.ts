import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(7.6),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: theme.spacing(0),
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(3),
      maxWidth: theme.spacing(170),
    },
    imageContainer: {
      display: 'flex',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  }),
);

export default useStyles;
