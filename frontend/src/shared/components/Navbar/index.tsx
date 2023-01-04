import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { sxStyles, useStyles } from './styles';
import Logo from '../Logo';

interface INavigationProps {
  window?: () => Window;
}

const pages = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Explore Recipes', route: '/explore' },
  { title: 'Dashboard', route: '/dashboard' },
];
const settings = [
  { title: 'Add a recipe', icon: <AddIcon /> },
  { title: 'Logout', icon: <LogoutIcon /> },
];

const Navigation: React.FC<INavigationProps> = ({ window }) => {
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
        {pages.map((page) => (
          <ListItem key={`drawer-${page.title}`} disablePadding>
            <ListItemButton className={classes.drawerListButton}>
              <Link to={page.route}>
                <Typography
                  className={classes.drawerListItemText}
                  variant="regular"
                >
                  {page.title}
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

        {/* Menu Hamburger Icon - Mobile view */}
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
              {pages.map((page) => (
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
                        {page.title}
                      </Typography>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* Mobile Logo Icon */}
        <div className={classes.navMobileIcon}>
          <Logo />
        </div>

        {/* User Icon  */}
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
            {settings.map((setting) => (
              <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                <div className={classes.menuItemButton}>
                  <span className={classes.dropdownIcon}>{setting.icon}</span>
                  <Typography variant="regular" textAlign="center">
                    {setting.title}
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
