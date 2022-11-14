import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./ResponsiveAppBar";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { FaBeer } from 'react-icons/fa';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import EventNoteIcon from '@mui/icons-material/EventNote';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        See You Then
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footor() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
      </Typography>
      <Copyright />
    </Box>
  );
}

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});
const buttons = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function HomePage() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <Container sx={{ display: 'flex', flexDirection: 'column', 'align-items': 'center' }} maxWidth="md">
            <Typography spacing={12}
                variant="h5"
                href=""
                sx={{
                  display: 'flex',
                  fontStyle: 'italic',
                  alignItems: 'center',
                  width: '100%',
                  flexGrow: 1,
                  fontFamily: 'Bradley Hand',
                  fontWeight: 1000,
                  letterSpacing: '.3rem',
                  color: '#000000',
                  textDecoration: 'none',
                  justifyContent: 'center',
                  fontSize: '2.5rem'
                }}
              >
                See You Then
            </Typography>
          </Container>
          <br></br>
          <Grid container spacing={12}>
              <Grid item key={1} xs={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
                >
                  <Button fullWidth variant={'outline-light'} sx={{ width : '100%', height: '96px', display: 'flex', backgroundColor:'#ffffff','font-family': 'Montez','font-weight':'bold'}}>
                  <EventNoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px'}} />
                    create an event
                  </Button>
                </Card>
              </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={12}>
              <Grid item key={1} xs={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
                >
              <Button fullWidth variant={'outline-light'} sx={{ width : '100%', height: '96px', display: 'flex', backgroundColor:'#ffffff','font-family': 'Montez','font-weight':'bold'}}>
                    <HowToVoteIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px'}} />
                  create a poll
                  </Button>
                </Card>
              </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={12}>
              <Grid item key={1} xs={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', 'align-items': 'center' }}
                >
                  <Button fullWidth variant={'outline-light'} sx={{ width : '100%', height: '96px', display: 'flex', backgroundColor:'#ffffff','font-family': 'Montez','font-weight':'bold'}}>
                  <CalendarMonthIcon sx={{ height: '96px', display: 'flex', 'line-height': '96px'}} />
                    decide the time
                  </Button>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
  );
}