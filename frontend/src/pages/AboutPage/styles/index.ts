import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
      maxWidth: '100%',
    },
    hero: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(65),
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.spacing(3),
      color: theme.palette.primary.main,
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(3),
      },
    },
    imgContainer: {
      width: '100%',
      height: '100%',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      padding: theme.spacing(9),
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: theme.spacing(0),
      },
    },
    headline: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      display: 'flex',
      gap: theme.spacing(3),
      flexDirection: 'column',
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down('lg')]: {
        marginRight: theme.spacing(1),
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(0.5),
      },
    },
    img: {
      position: 'absolute',
      bottom: -5,
      right: 0,
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    headImg: {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    btn: {
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'uppercase',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 'smaller',
      },
    },
    heading: {
      color: theme.palette.secondary.main,
      marginLeft: 'auto',
      marginRight: theme.spacing(0),
      marginBlock: theme.spacing(5),
    },
    cardsContainer: {
      display: 'flex',
      width: '100%',
      gap: theme.spacing(5),
      justifyContent: 'space-between',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: theme.spacing(5),
      },
    },
    cards: {
      maxWidth: theme.spacing(75),
      backgroundColor: theme.palette.background.default,
      boxShadow: '8px 8px 19px 13px rgba(71, 71, 71, 0.25)',
      borderRadius: theme.spacing(5),
      padding: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    interest: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: theme.spacing(12),
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.common.black,
      fontWeight: 'bolder',
      borderRadius: theme.spacing(3),
      paddingInline: theme.spacing(5),
      paddingBlock: theme.spacing(1),
      '&:first-child': {
        backgroundColor: theme.palette.neutrals.red,
      },
    },
    container: {
      marginTop: theme.spacing(2.5),
      display: 'flex',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(1),
        flexWrap: 'wrap',
      },
    },
  }),
);

export default useStyles;
