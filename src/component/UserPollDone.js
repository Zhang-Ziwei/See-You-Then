import Container from '@mui/material/Container';
import * as React from 'react';
import imgVoteDone from '../images/vote_done.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const buttontheme = createTheme({
  palette: {
    pinkbutton: {
      main: '#C23152',
      contrastText: "#fff"
    },
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});
export default function UserPollDone({ setUserPollState }) {
  return (
    <main>
      <Container maxWidth="sm">
        <div className='rwdimg' style={{ backgroundImage: `url(${imgVoteDone})` }} alt='Done' />
        <div className='complete' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>Complete！</div>
      </Container>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="flex-end"
      >
        <ThemeProvider theme={buttontheme}>
          <Button variant="contained" color="pinkbutton" onClick={() => setUserPollState(0)}>change</Button>
        </ThemeProvider>
      </Stack>
    </main>
  );
}