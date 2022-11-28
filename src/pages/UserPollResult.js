import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import UserPollDone from '../component/UserPollDone';
import UserPollOption from '../component/UserPollOption';
import UserPollTitle from '../component/UserPollTitle';
import Heart from '../images/heart.png';
import HeartBreak from '../images/heart_break.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

var choise = 0;

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});

export default function UserPollResult(pollProp) {
  const [userPollState, setUserPollState] = useState(0);
  const { pollProps } = pollProp;
  pollProps.setUserPollState = setUserPollState;
  console.log('pollProps.setUserPollState');
  console.log(pollProps.setUserPollState);
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <UserPollTitle titleProps={pollProps} />
          <Container maxWidth="sm">
            <Grid container spacing={2} sx={{ py: 4 }}>
              <Grid item xs={12} sm={12}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  <div className="optima" align="center">Result</div>
                </Typography>
                <Box>
                  <Container
                    sx={{
                      bgcolor: '#F695FF',
                      pt: 1,
                      pb: 1,
                      borderRadius: 3,
                    }}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                    <div className='wannagoText'>Japan</div>

                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                  </Container>
                </Box><br />
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  <div className="optima" align="center">Others</div>
                </Typography>
                <Box>
                  <Container
                    sx={{
                      bgcolor: '#F695FF',
                      pt: 1,
                      pb: 1,
                      borderRadius: 3,
                    }}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                    <div className='wannagoText'>City Hall</div>

                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                  </Container>
                </Box><br /><br />
                <Box>
                  <Container
                    sx={{
                      bgcolor: '#F695FF',
                      pt: 1,
                      pb: 1,
                      borderRadius: 3,
                    }}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                    <div className='wannagoText'>CS Building</div>

                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBreak})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBreak})` }} alt='Done' />
                    <div className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBreak})` }} alt='Done' />
                  </Container>
                </Box><br />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
  );
}
UserPollResult.propTypes = {
  pollProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};