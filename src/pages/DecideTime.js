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
import { Dayjs } from 'dayjs';
import DeadlineDatePicker from '../component/DeadlineDatePicker'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useState } from 'react';
import Calendar from '../calendar/Calendar';

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

export default function DecideTime() {
  // const [selectedDay, setSelectedDay] = useState<Date>(null);
  const [mode, setMode] = useState('loading')
  // Login data
  const [token, setToken] = useState("")
  const [userName, setUserName] = useState("")
  // All schedule
  const [schedule, setSchedule] = useState([])
  // View state of group or personal
  const [state, setState] = useState("all")
  // Group name
  const [group, setGroup] = useState("")
  // Record that if we have reequest data
	const [requested, setRequested] = useState(false)

  const sendData = (data) => {
    
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
                  fullWidth
                  autoComplete="given-name"
                  // variant="standard"
                  color="pinktextfield"
                />
                </ThemeProvider>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                /> */}
                {/* <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
              /> */}
              </Grid>
            </Grid>
            <div class="center optima_text date_padding" >
              Select the dates you want:
            </div>
            <Calendar
              mode={mode} setMode={setMode}
              token={token} setToken={setToken}
              userName={userName} setUserName={setUserName}
              schedule={schedule} setSchedule={setSchedule}
              state={state} setState={setState}
              group={group} setGroup={setGroup}
              requested={requested} setRequested={setRequested}
              sendData={sendData}
            />
            <div class='center mt' >
              <DeadlineDatePicker />
            </div>
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="flex-end"
              >
                <ThemeProvider theme={buttontheme}>
                 <Button variant="contained" color="pinkbutton">Next</Button>
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