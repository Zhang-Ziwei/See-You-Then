import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});
export default function UserHomePage({ handleChangeState }) {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(7)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <EventNoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  要去跨年嗎?
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(8)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <HowToVoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  跨年去哪裡呢?
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(9)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <CalendarMonthIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  <div className='optima'>甚麼時候出發!</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(10)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <EventNoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  <div className='optima'>要去跨年嗎? Result!</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(11)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <HowToVoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  <div className='optima'>跨年去哪裡呢? Result!</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button onClick={() => handleChangeState(12)} fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <CalendarMonthIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  <div className='optima'>甚麼時候出發! Result!</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
  );
}