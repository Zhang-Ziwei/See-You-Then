import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';


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
    pinktextfield: {
      main: '#DA94A4'
    }
  },
});

export default function UserPollTitle(props) {
  const { titleProps } = props;
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: '#F4D0DB',
          pt: 4,
          pb: 2,
          borderRadius: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <div className="optima" align="center">{titleProps.title}</div>
        </Typography>
      <Grid
        align="center" item xs={12} sm={12}>
        <div className='deadline'>{titleProps.deadLine}</div>
        <div className='deadline'>({titleProps.method})</div>
      </Grid>
      </Box>
    </Container>
  );
}

UserPollTitle.propTypes = {
  titleProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  }).isRequired,
};