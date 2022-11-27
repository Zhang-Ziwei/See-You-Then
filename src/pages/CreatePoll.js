import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Title from '../component/Title'
import Item from '../component/Item'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import major from '../images/Majority.png'
import random_pic from '../images/Random.png'
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

  const [numOption, setNumOption] = useState(1);
  const [items, setItems] = useState(['']);

  const [value, setValue] = React.useState('majority');

  const handleChange_o = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    setNumOption(numOption+1);
    setItems([...items, '']);
  }

  const handleDelete = (index) => {
    setNumOption(numOption-1);
    let tmp = items;
    tmp.splice(index, 1);
    setItems(tmp);
  }

  const handleChange = (e, index) => {
    let tmp = items;
    tmp[index] = e.target.value;
    setItems(tmp);
    console.log(tmp);
  }

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <Container maxWidth="sm">
            <Title titleName={"Create a Poll"}/>
            <Grid container spacing={3} sx={{mt: 2}}>
            <Grid item xs={12} sm={12} sx={{display: 'flex', justifyContent: 'start'}}>
                <ThemeProvider theme={buttontheme}>
                  <TextField
                      required
                      id={"Poll Name"}
                      name={"Poll Name"}
                      label={"Poll Name"}
                      fullWidth
                      autoComplete="given-name"
                      color="pinktextfield"
                  />
                </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
            <div class='optima_text option_padding' >
                  Options:
                </div>
              {items.map((item, index) => {
                return (
                  <Item 
                    key={index} 
                    name={`Option ${index+1}`} 
                    index={index} 
                    handleDelete={handleDelete}
                    handleChange={handleChange}
                  />
                )
              })}
              <Box >
                <ThemeProvider theme={buttontheme}>
                  <Button
                    variant="contained" color="success" sx={{ mt: 2, ml:6}}  onClick={handleAdd} startIcon={<AddIcon />}>
                    Add
                  </Button>
                </ThemeProvider>
              </Box>
              </Grid>
              </Grid>
            <p class='optima_text option_padding' margin-top="20px">
                  Final decision made by:
                </p>
            <FormControl className='mt' sx={{ml:6}}>
                    {/* <FormLabel id="demo-controlled-radio-buttons-group">Options</FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange_o}
                    >
                      <Grid container spacing={6} sx={{pt:1}} direction="row" >
                        <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                          <FormControlLabel value="majority" control={<Radio  sx={{ color: pink[800],'&.Mui-checked': {color: pink[600]  },  }} />} />
                        </Grid>
                        <Grid item xs={4}>
                          <img src={major} width="80" align="left" />
                        </Grid>
                        <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                          <FormControlLabel value="random" control={<Radio  sx={{ color: pink[800],'&.Mui-checked': {color: pink[600]  },  }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                          <img src={random_pic} width="80" />
                        </Grid>
                      </Grid>
                      {/* <FormControlLabel value="male" control={<Radio />}  />
                      <img src={compo13} width="400" class='center'/> */}
                    </RadioGroup>
                  </FormControl>
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