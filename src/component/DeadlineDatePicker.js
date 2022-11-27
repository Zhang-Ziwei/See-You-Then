import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const customTheme = createTheme({
	palette: {
		primary: {
			main: '#C23152',
			light:  '#C23152',
		},
		secondary: {
			main: '#DA94A4',
		},
    pinktextfield:{
      main: '#DA94A4'
    }
	},
})

export default function DeadlineDatePicker() {
  const [value, setValue] = React.useState(dayjs('2022-11-21'));

  return (
    <ThemeProvider theme={customTheme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props}  color="pinktextfield" />}
        label="Select your deadline"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
    </ThemeProvider>
  );
}