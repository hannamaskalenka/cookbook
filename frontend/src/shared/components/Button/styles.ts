import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '40px',
      padding: '8px',
    },
    label: {
      fontSize: '14px',
      color: theme.palette.text.secondary,
    },
    secondary: {
      color: 'red',
    },
  }),
);

export default useStyles;
