import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      width: '100%',
      padding: theme.spacing(5.5),
      borderRadius: theme.spacing(2.5),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      boxShadow: '8px 8px 19px 13px rgba(71, 71, 71, 0.25)',
      '& .slick-dots li button': {
        _before: {
          transition: '0.2s',
          content: "''",
          borderRadius: '100%',
        },
      },
      '& .slick-arrow': {
        transition: '0.2s',
        _before: {
          transition: '0.2s',
        },
      },
      '& .slick-next:before': {
        color: theme.palette.accent.main,
      },
      '& .slick-prev:before': {
        color: theme.palette.accent.main,
      },
    },
    item: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1.5),
      border: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
      [theme.breakpoints.down('md')]: {
        border: `${theme.spacing(0.2)} solid ${theme.palette.secondary.main}`,
      },
    },
    time: {
      display: 'flex',
      justifyContent: 'center',
      borderRadius: theme.spacing(2),
      background: theme.palette.secondary.main,
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      padding: theme.spacing(1),
    },
  }),
);

export default useStyles;
