import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingInline: theme.spacing(8),
      paddingBlock: theme.spacing(5),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('lg')]: {
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
      justifyContent: 'center',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  }),
);
export default useStyles;
