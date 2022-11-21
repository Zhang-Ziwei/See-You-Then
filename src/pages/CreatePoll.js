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


const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});


export default function CreatePoll() {

  const [numOption, setNumOption] = useState(1);
  const [items, setItems] = useState(['']);

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
            <Grid item xs={12} sm={12} sx={{display: 'flex', justifyContent: 'start', mx: 3}}>
                <TextField
                    required
                    id={"Poll Name"}
                    name={"Poll Name"}
                    label={"Poll Name"}
                    fullWidth
                    // sx={{width: '70%'}}
                    autoComplete="given-name"
                    variant="standard"
                />
            </Grid>
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
                <Button
                  variant="contained" sx={{ mt: 5, ml: 3 }} onClick={handleAdd}>
                  Add
                </Button>
              </Box>
            </Grid>
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