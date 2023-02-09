import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: theme.spacing(50),
      borderRadius: theme.spacing(70),
      backgroundColor: theme.palette.secondary.light,
      border: `${theme.spacing(0.1)} solid ${theme.palette.background.default}`,
      '& .MuiFilledInput-root': {
        borderRadius: theme.spacing(6),
        padding: theme.spacing(0),
      },
      '& .MuiFilledInput-root:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down('xl')]: {
        width: theme.spacing(40),
      },
    },
    label: {
      paddingInline: theme.spacing(0),
      paddingBlock: theme.spacing(3),
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        color: theme.palette.common.white,
      },
    },
  }),
);

export default useStyles;
