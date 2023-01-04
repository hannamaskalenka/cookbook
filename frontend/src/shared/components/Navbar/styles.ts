import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      justifyContent: 'space-between',
      background: theme.palette.background.default,
    },
    navIcon: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      '& svg': {
        width: '100%',
      },
    },
    navMobileIcon: {
      '& svg': {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    drawerContainer: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.background.default,
        boxSizing: 'border-box',
        width: theme.spacing(30),
      },
    },
    drawerBox: {
      textAlign: 'center',
    },
    drawerListButton: {
      textAlign: 'center',
      '& a': {
        textDecoration: 'none',
      },
    },
    drawerListItemText: {
      color: theme.palette.text.secondary,
    },
    navigationContainer: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    navigationList: {
      display: 'flex',
    },
    navigationListItem: {
      '& + &:before': {
        content: "''",
        margin: theme.spacing(0, 0.5),
        display: 'block',
        width: theme.spacing(1),
        height: theme.spacing(1),
        borderRadius: '50%',
        backgroundColor: theme.palette.background.paper,
      },
    },
    navigationListButton: {
      textAlign: 'center',
      width: 'max-content',
      '&:hover': {
        borderRadius: theme.spacing(5),
      },
      '& a': {
        textDecoration: 'none',
      },
    },
    navigationListText: {
      color: theme.palette.text.secondary,
    },
    menuIconContainer: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    dropdownIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
    },
    menu: {
      marginTop: theme.spacing(5.5),
      '& .MuiMenuItem-root': {
        borderRadius: theme.spacing(1.875),
        '&:hover': {
          backgroundColor: theme.palette.neutrals.green,
          color: theme.palette.background.default,
          '& .MuiSvgIcon-root': {
            fill: theme.palette.background.default,
          },
        },
      },
    },
    popover: {
      '& .MuiPaper-root': {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(2.5),
        width: theme.spacing(27.5),
        padding: theme.spacing(0.5, 2.3),
      },
    },
    menuItemButton: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
    },
  }),
);

export const sxStyles = {
  avatar: {
    bgcolor: 'primary.main',
    color: 'text.secondary',
  },
  appBar: {
    boxShadow: 'none',
  },
};
