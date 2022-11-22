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
import Calendar from '../calendar/Calendar'
import { useState } from 'react';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});
export default function DecideTime() {
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
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Decide Event Time
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="eventName"
                  name="eventName"
                  label="Event Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                /> */}
              </Grid>
            </Grid>
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
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Next</Button>
              </Stack>
            </Container>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
    
  );
}