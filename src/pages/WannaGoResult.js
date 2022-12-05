import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import WannaGoTitle from '../component/WannaGoTitle';
import FaceCry from '../images/face_cry.png';
import FaceLove from '../images/face_love.png';
import FaceThink from '../images/face_think.png';
import FaceWhat from '../images/face_what.png';


var voteDoneState = false;

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
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});
export default function WannaGoResult(goProp) {
  const { goProps } = goProp;
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <WannaGoTitle titleProps={goProps} />
          <br />
          <Container maxWidth="sm" sx={{maxWidth: "400px"}}>
            <Grid container spacing={2} sx={{ py: 4 }}>
              <Grid item xs={12} sm={12}>
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to right,#E199AA,#E199AA,#E199AA,#DADADA, #DADADA)'}}>

          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' />
          <div className='wannagoText'> I Wanna Go!</div>
          <div className='wannagoText'> 6 Votes</div>
          {/* <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceLove})` }} alt='Done' /> */}
        </Container>
        <br/><br/>
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to right,#E199AA,#DADADA,#DADADA,#DADADA ,#DADADA)'}}>

          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' />
          <div className='wannagoText'> Maybe I will?</div>
          <div className='wannagoText'> 2 Votes</div>
          {/* <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceThink})` }} alt='Done' /> */}
        </Container>
        <br/><br/>
        <Container
          sx={{
            bgcolor: '#E199AA',
            pt: 1,
            pb: 1,
            borderRadius: 3,
          }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to right,#E199AA,#DADADA,#DADADA,#DADADA,#DADADA)'}}>

          <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' />
          <div className='wannagoText'> Sorry, I can't</div>
          <div className='wannagoText'>2 Votes</div>
          {/* <div className='rwdfaceimg' style={{ backgroundImage: `url(${FaceCry})` }} alt='Done' /> */}
        </Container>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                >
                  <ThemeProvider theme={buttontheme}>
                    {/* <Button variant="contained" color="pinkbutton" >ok</Button> */}
                  </ThemeProvider>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
  );
}
WannaGoResult.propTypes = {
  goProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
    num3: PropTypes.number.isRequired,
  }).isRequired,
};