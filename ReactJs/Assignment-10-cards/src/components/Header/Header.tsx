import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


function Header() {

  return (
    <AppBar position="static" sx={{backgroundColor: "#000000", position:"fixed", zIndex: 2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" src='/images/logo.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width:"42px", height:"42px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PROFILES
          </Typography>
          <Box component="img" src='/images/logo.png' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width:"42px", height:"42px" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PROFILES
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;