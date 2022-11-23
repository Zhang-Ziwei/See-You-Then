import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react'
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Avatar from '@mui/joy/Avatar';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
import Sheet from '@mui/joy/Sheet';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { radioClasses } from '@mui/joy/Radio';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import compo12 from '../images/Component_12.png'
import compo13 from '../images/Component_13.png'
import DeadlineDatePicker from '../component/DeadlineDatePicker'
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { flexbox } from '@mui/system';
import { pink } from '@mui/material/colors';

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



export default function CreateEventPage() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 4, }} maxWidth="md">
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
                <div className="optima" align="center">Create an Event</div>
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
                  // variant="filled"
                  helperText="Please enter your event name"
                  color="pinktextfield"
                />
                </ThemeProvider>
              </Grid>
              <Grid item xs={12}>

                <div class='optima_text'>
                  Option:
                </div>
                    {/* <RadioGroup
                    aria-label="platform"
                    defaultValue="2"
                    overlay
                    name="platform"
                    sx={{
                      flexDirection: 'column',
                      gap: 2,
                      [`& .${radioClasses.checked}`]: {
                        [`& .${radioClasses.action}`]: {
                          inset: -1,
                        
                          backgroundColor: 'rgba(244, 208, 219, 0.4)',
                        },
                      },
                      [`& .${radioClasses.radio}`]: {
                        display: 'contents',
                        '& > svg': {
                          zIndex: 2,
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          bgcolor: 'background.body',
                          borderRadius: '50%',
                        },
                      },
                    }}
                  >
                      <Sheet
                        key= "2"
                        variant="outlined"
                        sx={{
                          borderRadius: 'md',
                          bgcolor: 'background.level1',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 2,
                          minWidth: 120,
                        }}
                      >
                        <Radio id="2" value="2" checkedIcon={<CheckCircleRoundedIcon color='secondary'/>} />
                        <img src={compo12} width="300"/>

                      </Sheet>
                       <Sheet
                       key="3"
                       variant="outlined"
                       sx={{
                         borderRadius: 'md',
                         bgcolor: 'background.level1',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         gap: 1.5,
                         p: 2,
                         minWidth: 120,
                       }}
                     >
                       <Radio id="3" value="3" checkedIcon={<CheckCircleRoundedIcon color='secondary'/>} />
                       <img src={compo13} width="300"/>
                     </Sheet>
                  </RadioGroup> */}
                  <FormControl className='mt'>
                    {/* <FormLabel id="demo-controlled-radio-buttons-group">Options</FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <Grid container spacing={2} sx={{pt:5}}>
                        <Grid item xs={4} sx={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                          <FormControlLabel value="female" control={<Radio  sx={{ color: pink[800],'&.Mui-checked': {color: pink[600]  },  }} />} />
                        </Grid>
                        <Grid item xs={8}>
                          <img src={compo12} width="300" />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} sx={{py:5}}>
                        <Grid item xs={4} sx={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                          <FormControlLabel value="male" control={<Radio  sx={{ color: pink[800],'&.Mui-checked': {color: pink[600]  },  }}/>} />
                        </Grid>
                        <Grid item xs={8}>
                          <img src={compo13} width="300" />
                        </Grid>
                      </Grid>
                      {/* <FormControlLabel value="male" control={<Radio />}  />
                      <img src={compo13} width="400" class='center'/> */}
                    </RadioGroup>
                  </FormControl>
              </Grid>
            </Grid>
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