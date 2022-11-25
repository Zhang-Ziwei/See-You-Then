

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
export default function HomePage({handleChangeState}) {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <br></br>
          <Grid container spacing={12}>
            <Grid item key={1} xs={12} onClick={() => handleChangeState(1)}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <EventNoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem' }} />
                  <div className='optima'>create an event</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={12}>
            <Grid item key={1} xs={12} onClick={() => handleChangeState(2)}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <HowToVoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem'}} />
                  <div className='optima'>create a poll</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={12}>
            <Grid item key={1} xs={12} onClick={() => handleChangeState(3)}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <CalendarMonthIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem'}} />
                  <div className='optima'>decide the time</div>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={12}>
            <Grid item key={1} xs={12} onClick={() => handleChangeState(4)}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
              >
                <Button fullWidth variant={'outline-light'} sx={{ width: '100%', height: '96px', display: 'flex', backgroundColor: '#ffffff', 'font-weight': 'bold' }}>
                  <CalendarMonthIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px', mr: '0.5rem'}} />
                  <div className='optima'>user decide the time</div>
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