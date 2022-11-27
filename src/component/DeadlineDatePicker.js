import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function DeadlineDatePicker({value, setValue}) {

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