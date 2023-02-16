import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(7.6),
      minHeight: 'max-content',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(3),
      maxWidth: theme.spacing(170),
      [theme.breakpoints.between('md', 'lg')]: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: theme.spacing(0),
      },
    },

    formContainer: {
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        flexBasis: 'unset',
        maxWidth: 'unset',
      },
    },
    subtitle: {
      fontSize: theme.spacing(2.5),
      fontWeight: 400,
      marginBottom: theme.spacing(4),
    },
    button: {
      width: theme.spacing(50),
    },
    emailInput: {
      width: theme.spacing(50),
      borderBottom: 'none',
      marginBottom: theme.spacing(6),
      '& .MuiFilledInput-root': {
        border: `${theme.spacing(0.1)} solid ${
          theme.palette.background.default
        }`,
        borderRadius: theme.spacing(6),
        backgroundColor: theme.palette.secondary.light,
        paddingInline: theme.spacing(3),
        paddingBlock: theme.spacing(0.4),
        '& .MuiInputBase-input': {
          padding: theme.spacing(2, 1.5, 1.5),
        },
      },
      '& .MuiFilledInput-root:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      '& .MuiFilledInput-root.Mui-focused': {
        backgroundColor: theme.palette.neutrals.green,
      },
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(43),
      },
    },
    title: {
      marginBottom: theme.spacing(1),
    },
    paragraph: {
      fontSize: '1rem',
      margin: theme.spacing(3, 0),
      color: theme.palette.action.disabled,
      [theme.breakpoints.down('md')]: {
        color: theme.palette.text.secondary,
      },
    },
    iconContainer: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '64%',
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spacing(8),
      height: theme.spacing(8),
      padding: 0,
      [theme.breakpoints.down('md')]: {
        borderRadius: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
      },
    },
    socialMedia: {
      fontSize: '3rem',
      color: theme.palette.background.default,
    },
    noAccountText: {
      width: '75%',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'baseline',
      [theme.breakpoints.down('md')]: {
        color: theme.palette.text.secondary,
      },
    },
    label: {
      padding: theme.spacing(0, 0),
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        color: theme.palette.common.white,
      },
    },
    linkButton: {
      width: 'max-content',
    },
  }),
);

export default useStyles;
