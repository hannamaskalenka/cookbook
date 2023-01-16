import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: '1.875rem',
      maxWidth: '87rem',
    },
    gridItem: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingInlineStart: '5rem',
      [theme.breakpoints.down('md')]: {
        alignItems: 'end',
      },
    },
    input: {
      maxWidth: '25rem',
      borderBottom: 'none',
      padding: theme.spacing(3),
      '& .MuiFilledInput-root': {
        border: '2px solid #679278',
        borderRadius: '3rem',
        backgroundColor: '#F5F5F5',
        paddingInline: '10.5rem',
        paddingBlock: '0.15rem',
      },
      '& .MuiFilledInput-root:hover': {
        backgroundColor: '#F5F5F5',
      },
      '& .MuiFilledInput-root.Mui-focused': {
        backgroundColor: '#E8F2E3',
      },
    },
    content: {
      alignItems: 'center',
      paddingBlockStart: '3rem',
    },
    paragraph: {
      fontSize: '1rem',
      fontWeight: 'bolder',
      paddingBlock: theme.spacing(3),
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBlockStart: '1rem',
    },
    noAccountText: {
      display: 'flex',
      paddingBlockStart: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      },
    },
    label: {
      paddingInline: theme.spacing(),
    },
    image: {
      marginInlineStart: '3rem',
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        borderRadius: '1rem',
        backgroundColor: theme.palette.background.paper,
        width: '4rem',
        height: '4rem',
      },
    },
  }),
);

export default useStyles;
