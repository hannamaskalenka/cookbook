/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Logo from 'assets/images/logo.svg';
import {
  Navigation,
  Button,
  Dot,
  DropdownWrapper,
  LinkContainer,
  MenuContainer,
  ImageContainer,
} from './styled';
import Dropdown from './Dropdown';

const pages = ['About', 'Explore recipes', 'Dashboard'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [showDropdown, setShowDropdown] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (ref.current?.contains(target)) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Navigation position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Link to="/">
            <ImageContainer>
              <img src={Logo} alt="logo" />
            </ImageContainer>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="accent">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MenuContainer
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <LinkContainer>
                <Button key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    variant="regular"
                    sx={{
                      fontSize: '1.2rem',
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
                <Dot />
              </LinkContainer>
            ))}
          </MenuContainer>
          <DropdownWrapper ref={ref}>
            <IconButton
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              sx={{ p: 0 }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            {showDropdown && (
              <Dropdown closeDropdown={() => setShowDropdown(false)} />
            )}
          </DropdownWrapper>
        </Toolbar>
      </Container>
    </Navigation>
  );
}
export default Navbar;
