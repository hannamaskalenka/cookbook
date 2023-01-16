import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '40px',
      textTransform: 'capitalize',
      letterSpacing: '0.04em',
    },
    label: {
      fontSize: '20px',
      color: theme.palette.text.secondary,
    },
    secondary: {
      color: 'red',
    },
  }),
);

export default useStyles;
