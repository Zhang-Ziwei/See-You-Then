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

var choise = 0;

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});

export default function UserPoll(pollProp) {
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
          <br />
          <Container maxWidth="sm">
            <Grid container spacing={2} sx={{ py: 4 }}>
              <Grid item xs={12} sm={12}>
                {
                  (userPollState === 0) ?
                    <UserPollOption pollProps={pollProps}/>
                    : <UserPollDone setUserPollState={setUserPollState} />
                }
              </Grid>
            </Grid>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
  );
}
UserPoll.propTypes = {
  pollProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
    choices:PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};