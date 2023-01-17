import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(7.6),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(0),
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(3),
      maxWidth: theme.spacing(170),
    },
    gridItem: {
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        maxWidth: '100%',
      },
    },
    input: {
      width: theme.spacing(50),
      borderBottom: 'none',
      padding: theme.spacing(3),
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
      paddingInline: theme.spacing(),
    },
    inputContainer: {
      marginBlockEnd: theme.spacing(3),
    },
    imageContainer: {
      display: 'block',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    image: {
      marginInlineStart: theme.spacing(3),
      width: '100%',
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
  }),
);

export default useStyles;
