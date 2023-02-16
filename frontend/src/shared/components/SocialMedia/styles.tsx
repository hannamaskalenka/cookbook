import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
      fontSize: '1rem',
      fontWeight: 'bolder',
      paddingBlock: theme.spacing(3),
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBlockStart: theme.spacing(3),
      maxWidth: theme.spacing(30),
      [theme.breakpoints.down('md')]: {
        gap: theme.spacing(2),
      },
    },
    noAccountText: {
      display: 'flex',
      paddingBlockStart: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: theme.palette.text.secondary,
      },
    },
    label: {
      paddingInline: theme.spacing(0),
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        color: theme.palette.common.white,
      },
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        borderRadius: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
    },
    socialMedia: {
      fontSize: '3rem',
      color: theme.palette.background.default,
    },
    noAccountContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    noAccountButton: {
      width: 'max-content',
    },
  }),
);

export default useStyles;
