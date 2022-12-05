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
import Calendar from '../resultCalendar/Calendar'
import { useState } from 'react';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});

const buttontheme = createTheme({
  palette: {
    availableButton: {
      main: '#8AC926',
      contrastText: "#000",
    },
    uncertainButton: {
      main: '#FFCA3A',
      contrastText: "#000"
    },
    unavailableButton: {
      main: '#FF595E',
      contrastText: "#000"
    },
    pinkbutton: {
      main: '#C23152',
      contrastText: "#fff"
    },
  },
});


export default function DecideTimeResult({
  handleChangeState,
  decideTimeName,
  handleUserClickOnDay,
  ableDay,
  handleChangeSelectedState,
  availableDay,
  uncertainDay,
  unavailableDay
}) {

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
                 <div className="optima" align="center">{decideTimeName}</div>
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="eventName"
                  name="eventName"
                  label="Event Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid> */}
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                /> */}
              </Grid>
            </Grid>
            <Calendar
              handleUserClickOnDay={handleUserClickOnDay}
              ableDay={ableDay}
              availableDay={availableDay}
              uncertainDay={uncertainDay}
              unavailableDay={unavailableDay}
            />
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                {/* <ThemeProvider theme={buttontheme}>
                  <Button id={0} variant="contained" color="availableButton" className="SelectState" onClick={handleChangeSelectedState}>Available</Button>
                  <Button id={1} variant="contained" color="uncertainButton" className="disabledSelectState SelectState" onClick={handleChangeSelectedState}>Uncertain</Button>
                  <Button id={2} variant="contained" color="unavailableButton" className="disabledSelectState SelectState" onClick={handleChangeSelectedState}>Unavailable</Button>
                </ThemeProvider> */}
              </Stack>
            </Container>
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <ThemeProvider theme={buttontheme}>
                  <Button variant="contained" color="pinkbutton" onClick={() => handleChangeState(0)}>Done</Button>
                </ThemeProvider>
              </Stack>
            </Container>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
    
  );
}