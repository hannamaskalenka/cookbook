import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      marginBlock: theme.spacing(6),
      borderRadius: theme.spacing(60),
      textTransform: 'capitalize',
      letterSpacing: '0.04em',
      background: theme.palette.secondary.main,
      '& .MuiFilledInput-root': {
        boxSizing: 'border-box',
        padding: theme.spacing(4, 3),
        borderRadius: theme.spacing(6),
      },
      '& .MuiFilledInput-root:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down('xl')]: {
        width: '100%',
      },
    },
    button: {
      position: 'absolute',
      right: '0',
      background: theme.palette.accent.main,
      borderRadius: theme.spacing(70),
      padding: theme.spacing(2, 7),
    },
  }),
);

export default useStyles;
