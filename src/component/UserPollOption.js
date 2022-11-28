import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import UserPollOptionRow from '../component/UserPollOptionRow';

const buttontheme = createTheme({
  palette: {
    pinkbutton: {
      main: '#C23152',
      contrastText: "#fff"
    },
    greybutton: {
      main: '#F3EDF7',
      contrastText: "#ccc"
    },
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});

export default function UserPollOption(pollProp, setUserPollState) {
  const { pollProps } = pollProp;
  const { setUserPollStates } = setUserPollState;
  return (<div>
    {pollProps.choices.map(name => ( <UserPollOptionRow rowProps = {name}></UserPollOptionRow>))}  
    <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="flex-end"
    >
      <ThemeProvider theme={buttontheme}>
        <Button variant="contained" color="pinkbutton" onClick={() => pollProps.setUserPollState(1)}>Next</Button>
      </ThemeProvider>
    </Stack>
  </div>
  );
}

UserPollOption.propTypes = {
  pollProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
    choices:PropTypes.arrayOf(PropTypes.object),
    setUserPollState:PropTypes.func
  }).isRequired,
};