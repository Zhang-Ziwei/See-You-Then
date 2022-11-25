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
import Calendar from '../orginizerCalendar/Calendar';
import compo14 from '../images/Component_14.png'
import Avatar from '@mui/material/Avatar';

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

export default function EventFinishPage(){
    return (
        <ThemeProvider theme={themeLight}>
          <CssBaseline />
            <main>
            <Container sx={{ py: 8, }} maxWidth="md">
                <div className='optima_text' align='center'>A time decision named</div>
                <div className='optima_text red_text' align='center'>2023 New Year Countdown</div>
                <div className='optima_text' align='center'>has been successfully created.</div>
            </Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar  alt="The image" src={compo14} sx={{
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{m: 6
                }}
            >
        
                <ThemeProvider theme={buttontheme}>
                <Button variant="contained" color="pinkbutton" style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>Back to Home</Button>
                </ThemeProvider>
            </Box>
            </main>
        </ThemeProvider>
    );
}
