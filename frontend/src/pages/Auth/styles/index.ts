import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      width: '100%',
      alignItems: 'center',
      marginBlock: theme.spacing(3),
    },
    content: {
      alignItems: 'center',
      paddingBlockStart: theme.spacing(4),
    },
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
    inputContainer: {
      marginBlockEnd: theme.spacing(3),
    },
    actionContainer: {
      marginBlockStart: theme.spacing(3),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        maxWidth: theme.spacing(35),
      },
    },
    passwordInputLabelContainer: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    },
    forgotPasswordLinkLabel: {
      fontSize: theme.spacing(1.9),
      fontWeight: 'bold',
      [theme.breakpoints.up('md')]: {
        color: theme.palette.text.primary,
      },
    },
    forgotPasswordRequestLink: {
      width: 'max-content',
    },
    button: {
      width: theme.spacing(52),
    },
  }),
);

export default useStyles;
