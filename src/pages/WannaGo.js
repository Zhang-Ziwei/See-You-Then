import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import WannaGoDone from '../component/WannaGoDone';
import WannaGoOption from '../component/WannaGoOption';
import WannaGoTitle from '../component/WannaGoTitle';

var choise = 0;

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});

export default function WannaGo(goProp) {
  const [wannGoState, setWannaGoState] = useState(0);
  var buttonTitle = 'NEXT';
  const { goProps } = goProp;
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <WannaGoTitle titleProps={goProps} />
          <br />
          <Container maxWidth="sm">
            <Grid container spacing={2} sx={{ py: 4 }}>
              <Grid item xs={12} sm={12}>
                {
                  (wannGoState === 0) ?
                    <WannaGoOption titleProps={goProps} setWannaGoState={setWannaGoState} />
                    : <WannaGoDone setWannaGoState={setWannaGoState} />
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
WannaGo.propTypes = {
  goProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
  }).isRequired,
};