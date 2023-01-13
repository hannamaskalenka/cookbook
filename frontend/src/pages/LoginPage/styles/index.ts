import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: '1.875rem',
      maxHeight: '49rem',
      maxWidth: '77rem',
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
      width: '25rem',
      padding: theme.spacing(3),
      '& .MuiFilledInput-root': {
        borderRadius: '3rem',
        backgroundColor: '#F5F5F5',
        paddingInline: '1rem',
        paddingBlock: '0.25rem',
        '& .MuiFilledInput-root': {
          '&::after': {
            borderBottom: 'none',
          },
        },
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
      paddingBlockStart: '2rem',
      gap: '0.5rem',
    },
    paragraph: {
      fontSize: '1rem',
      fontWeight: 'bolder',
      paddingBlock: theme.spacing(3),
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    noAccountText: {
      display: 'flex',
      paddingBlock: theme.spacing(2),
      gap: '1rem',
    },
    label: {
      paddingInline: theme.spacing(2),
    },
  }),
);

export default useStyles;
