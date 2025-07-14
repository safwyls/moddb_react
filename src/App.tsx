import { useState } from 'react';
import './App.css';
import Tabs from './Components/Tabs';
import ResponsiveAppBar from './Components/AppBar';
import { Box, Container, CssBaseline } from '@mui/material';
import Home from './Components/Home';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box sx={{  backgroundColor: 'transparent', height: '100vh' }}>
          <Box 
            sx={{ backgroundColor: '#fbf5eaaa',  borderRadius: '0.5rem' }}>
            <ResponsiveAppBar />
            <Tabs />
          </Box>
          <Home />
        </Box>
      </Container>
    </>
  )
}