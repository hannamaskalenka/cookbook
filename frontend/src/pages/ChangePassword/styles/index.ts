import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(7.6),
      minHeight: 'max-content',
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
      justifyContent: 'flex-end',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    formContainer: {
      alignItems: 'center',
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
      paddingBlock: theme.spacing(3),
      color: theme.palette.action.disabled,
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBlockStart: theme.spacing(3),
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
    noAccountText: {
      display: 'flex',
      paddingBlockStart: theme.spacing(5),
      justifyContent: 'space-between',
      alignItems: 'baseline',
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
    linkButton: {
      width: 'max-content',
    },
  }),
);

export default useStyles;
