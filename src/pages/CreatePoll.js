import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';


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


export default function CreatePoll() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: '#F4D0DB',
                pt: 4,
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
                <div className="optima" align="center">Create a Poll</div>
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{py:4}}>
              <Grid item xs={12} sm={12}>
              <ThemeProvider theme={buttontheme}>
                <TextField
                  required
                  id="pollName"
                  name="pollName"
                  label="Poll Name"
                  fullWidth
                  autoComplete="given-name"
                  color="pinktextfield"
                />
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className='optima'>
                Options:
                </div>
                <TextField
                  required
                  id="option1"
                  name="option1"
                  label="option 1"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="option2"
                  name="option2"
                  label="option 2"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="contained" color="success" sx={{ mt: 2}} startIcon={<AddIcon />}>
                  Add
                </Button>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                /> */}
              </Grid>
            </Grid>
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