import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PAGES, SETTINGS } from './constants';
import { sxStyles, useStyles } from './styles';
import Logo from '../Logo';

interface INavigationProps {
  window?: () => Window;
}

const Navigation: React.FC<INavigationProps> = ({ window }) => {
  const { t } = useTranslation();
  const userName = 'Hanna'; // TODO: get name from Auth Context
  const classes = useStyles();
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpened((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className={classes.drawerBox}>
      <List>
        {PAGES.map((page) => (
          <ListItem key={`drawer-${page.title}`} disablePadding>
            <ListItemButton className={classes.drawerListButton}>
              <Link to={page.route}>
                <Typography
                  className={classes.drawerListItemText}
                  variant="regular"
                >
                  {t(page.title)}
                </Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={sxStyles.appBar}>
      <Toolbar className={classes.toolbar}>
        <Drawer
          container={container}
          variant="temporary"
          open={isDrawerOpened}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className={classes.drawerContainer}
        >
          {drawer}
        </Drawer>

        <Grid className={classes.menuIconContainer}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.navigationContainer}>
          <div className={classes.navIcon}>
            <Logo />
          </div>
          <Grid>
            <List className={classes.navigationList}>
              {PAGES.map((page) => (
                <ListItem
                  key={page.title}
                  disablePadding
                  className={classes.navigationListItem}
                >
                  <ListItemButton className={classes.navigationListButton}>
                    <Link to={page.route}>
                      <Typography
                        className={classes.navigationListText}
                        variant="regular"
                      >
                        {t(page.title)}
                      </Typography>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <div className={classes.navMobileIcon}>
          <Logo />
        </div>

        <Grid>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt={userName} sx={sxStyles.avatar}>
              {userName[0]}
            </Avatar>
          </IconButton>
          <Menu
            MenuListProps={{ className: classes.menu }}
            PopoverClasses={{ root: classes.popover }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {SETTINGS.map((setting) => (
              <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                <div className={classes.menuItemButton}>
                  <span className={classes.dropdownIcon}>
                    <setting.icon />
                  </span>
                  <Typography variant="regular" textAlign="center">
                    {t(setting.title)}
                  </Typography>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
