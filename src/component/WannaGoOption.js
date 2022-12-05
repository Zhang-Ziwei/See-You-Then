import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import FaceCry from '../images/face_cry.png';
import FaceLove from '../images/face_love.png';
import FaceThink from '../images/face_think.png';
import FaceWhat from '../images/face_what.png';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});

const buttontheme = createTheme({
  palette: {
    pinkbutton: {
      main: '#C23152',
      contrastText: "#fff"
    },
    greybutton: {
      main: '#F3EDF7',
      contrastText: "#ccc"
    },
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});

export default function WannaGoOption({ setWannaGoState }) {
  const [btn1state, setBtn1state] = useState(false);
  const [btn2state, setBtn2state] = useState(false);
  const [btn3state, setBtn3state] = useState(false);
  return (<div>
    <Box
      onClick={() => { setBtn1state(true); setBtn2state(false); setBtn3state(false); }}
    >
      {btn1state ?
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' />
          <div className='wannagoText'> I Wanna Go!</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' />
        </Container>
        :
        <Container
          sx={{
            bgcolor: '#F3EDF7',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' />
          <div className='wannagoText'> I Wanna Go!</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' />
        </Container>}
    </Box><br /><br />
    <Box
      onClick={() => { setBtn1state(false); setBtn2state(true); setBtn3state(false); }}
    >
      {btn2state ?
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' />
          <div className='wannagoText'>Maybe I will?</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' />
        </Container>
        :
        <Container
          sx={{
            bgcolor: '#F3EDF7',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' />
          <div className='wannagoText'>Maybe I will?</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' />
        </Container>}
    </Box><br /><br />
    <Box
      onClick={() => { setBtn1state(false); setBtn2state(false); setBtn3state(true); }}
    >
      {btn3state ?
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' />
          <div className='wannagoText'>Sorry, I can't</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' />
        </Container> :
        <Container
          sx={{
            bgcolor: '#F3EDF7',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' />
          <div className='wannagoText'>Sorry, I can't</div>
          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' />
        </Container>}
    </Box>
    <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="flex-end"
    >
      <ThemeProvider theme={buttontheme}>
      {btn1state||btn2state||btn3state ?
        <Button variant="contained" color="pinkbutton" onClick={() => setWannaGoState(1)}>Next</Button>
        :
        <Button variant="contained" color="greybutton" >Next</Button>
      }
      </ThemeProvider>
    </Stack>
  </div>
  );
}
