import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

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
    input: {
      background: "rgb(244, 208, 219)"
    }
  });

export default function Item({name, index, value, handleDelete, handleChange}) {
    return (
        <Grid item xs={12} sm={12} sx={{display: 'flex', justifyContent: 'start', mx: 3}}>
            <ThemeProvider theme={buttontheme}>
                <TextField
                    required
                    id={name}
                    name={name}
                    label={name}
                    key={index}
                    value={value}
                    fullWidth
                    autoComplete="given-name"
                    color="pinktextfield"
                    sx={{ml: 3, my:1}}
                    onChange={(e) => handleChange(e, index)}
                    variant = "standard"
                />
            </ThemeProvider>
            <DeleteIcon 
                sx={{mt: 2, ml:2, position: 'relative', right: '1px', "&:hover": {transform: 'scale(1.2)'}, color: 'red'}} 
                onClick={() => handleDelete(index)}
            />
        </Grid>
    )
}