import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import Heart from '../images/heart.png';
import HeartBlank from '../images/heart_blank.png';
import HeartBreak from '../images/heart_break.png';
import HeartBreakBlank from '../images/heart_break_blank.png';
import PropTypes from 'prop-types';

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
    greybutton: {
      main: '#F3EDF7',
      contrastText: "#ccc"
    },
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});

export default function UserPollOptionRow(rowProp) {
  const { rowProps } = rowProp;
  const [btn1state, setBtn1state] = useState(false);
  const [btn2state, setBtn2state] = useState(false);
  return (<div>
    <Box>
      <Container
        sx={{
          bgcolor: '#F695FF',
          pt: 1,
          pb: 1,
          borderRadius: 3,
        }}
        style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        {btn1state ?
          <div onClick={() => { setBtn1state(false); setBtn2state(false); }} className='rwdHeartimg' style={{ backgroundImage: `url(${Heart})` }} alt='Done' />
          : <div onClick={() => { setBtn1state(true); setBtn2state(false); }} className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBlank})` }} alt='Done' />
        }
        <div className='wannagoText'>{rowProps.title}</div>
        {btn2state ?
          <div onClick={() => { setBtn1state(false); setBtn2state(false); }} className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBreak})` }} alt='Done' />
          : <div onClick={() => { setBtn1state(false); setBtn2state(true); }} className='rwdHeartimg' style={{ backgroundImage: `url(${HeartBreakBlank})` }} alt='Done' />
        }
      </Container>
    </Box><br/><br/>
  </div>
  );
}

UserPollOptionRow.propTypes = {
  rowProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};