import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Calendar from '../orginizerCalendar/Calendar'
import { useState } from 'react';
import DeadlineDatePicker from '../component/DeadlineDatePicker'
import 'react-day-picker/dist/style.css';

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
    pinktextfield:{
      main: '#DA94A4'
    }
  },
});

export default function DecideTime({
  decideTimeName, setDecideTimeName,
  handleClickOnDay,
  ableDay,
  decideTimeDeadline,
  setDecideTimeDeadline,
  handleChangeState
}) {

  const handleChangeEventName = (event) => {
    setDecideTimeName(event.target.value);
  }

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: '#F4D0DB',
                pt: 3,
                pb: 2,
                borderRadius: 3,
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                 <div className="optima" align="center">Decide Event Time</div>
              </Typography>
            </Box>
            <Grid container spacing={3} sx={{py:3}}>
              <Grid item xs={12} sm={12}>
              <ThemeProvider theme={buttontheme}>
                <TextField
                  required
                  id="eventName"
                  name="eventName"
                  label="Event Name"
                  value={decideTimeName}
                  fullWidth
                  autoComplete="given-name"
                  // variant="standard"
                  color="pinktextfield"
                  onChange={handleChangeEventName}
                />
                </ThemeProvider>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <div className="center optima_text date_padding" >
              Select the dates you want:
            </div>
            <Calendar
                 handleClickOnDay={handleClickOnDay}
                 ableDay={ableDay}
            />
            <div className='center mt' >
              <DeadlineDatePicker 
                value={decideTimeDeadline}
                setValue={setDecideTimeDeadline}
              />
            </div>
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="flex-end"
              >
                <ThemeProvider theme={buttontheme}>
                 <Button variant="contained" color="pinkbutton" onClick={() => handleChangeState(6)}>Next</Button>
                </ThemeProvider>
              </Stack>
            </Container>
          </Container>
        </Container>
      </main>
    </ThemeProvider>
    
  );
}