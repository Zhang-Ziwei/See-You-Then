import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const color = {
  "font": "#000000",
  "bar": "#FFFFFF",
  "avatar": "#000000"
}

function ResponsiveAppBar({handleChangeState}) {

  return (
    <AppBar position="static" sx={{ bgcolor: color["bar"] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Big screen */}
          <Diversity3Icon sx={{ display: { xs: 'none', md: 'flex' ,'font-style': 'italic'}, mr: 3, color: color["font"]}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' ,'font-style': 'italic'},
              fontFamily: 'Montez',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: color["font"],
              textDecoration: 'none',
            }}
          >
            See You Then
          </Typography>
          <Diversity3Icon sx={{ display: { xs: 'flex', md: 'none' ,'font-style': 'italic'}, mr: 1, color: color["font"]}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' ,'font-style': 'italic'},
              flexGrow: 1,
              fontFamily: 'Montez',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: color["font"],
              textDecoration: 'none',
            }}
          >
            See You Then
          </Typography>

          <Box sx={{ flexGrow: 0, position: "fixed", right: 10}}>
            {/* The description of the user button */}
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{bgcolor: color["avatar"]}}>
                  <PersonRoundedIcon />
                </Avatar >
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;