import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './stats.css';

function ResponsiveAppBar() {
    const {matchLeft, wrongMatches} = useContext(GameContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#ffffff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Memory Game
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem key="0">
                  <Typography sx={{ textAlign: 'center', color: 'black' }}>Match Left: {matchLeft}</Typography>
                </MenuItem>
                <MenuItem key="1">
                  <Typography sx={{ textAlign: 'center', color: 'black' }}>Wrong Matches: {wrongMatches}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Memory Game
          </Typography>
          <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}, flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent:'center'}}>
              {(matchLeft === 0)&& <Button key="0" onClick={handleCloseNavMenu} sx={{ my: 1, color: 'black', display: 'block' }}>
              <Typography variant="h5" noWrap component="a" href="/" sx={{color: 'black', textDecoration: 'none',}}>
                <div id="restart">Game Over, Restart?</div> 
              </Typography>
              </Button>
              }
              {(matchLeft > 0)&& <Button key="1" onClick={handleCloseNavMenu} sx={{ my: 1, color: 'black', display: 'block' }}>
                Match Left: {matchLeft}
              </Button>
              }
              <Button key="2" onClick={handleCloseNavMenu} sx={{ my: 1, color: 'black', display: 'block' }}>
                Wrong Matches: {wrongMatches}
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;