import Container from '@mui/material/Container';
import * as React from 'react';
import imgVoteDone from '../images/Component_14.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import compo14 from '../images/Component_14.png'
import Avatar from '@mui/material/Avatar';

const buttontheme = createTheme({
  palette: {
    pinkbutton: {
      main: '#C23152',
      contrastText: "#fff"
    },
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});
export default function WannaGoDone({ setWannaGoState }) {
  return (
    <main>
      <Container maxWidth="sm">
      <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar  alt="The image" src={compo14} sx={{
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            </Box>
        <div className='complete' style={{ display: 'flex', justifyContent: 'space-around', paddingTop:"20px", alignItems: 'center' }}>Complete！</div>
      </Container>
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{m: 6
          }}
      >
  
          <ThemeProvider theme={buttontheme}>
          <Button variant="contained" color="pinkbutton" style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}} onClick={() =>setWannaGoState(0)}>Edit Response</Button>
          </ThemeProvider>
      </Box>
    </main>
  );
}