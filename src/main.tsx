import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#98856d',
    },
    secondary: {
      main: '#9bc45e',
    },
    success: {
      main: '#9fcf34',
    },
    info: {
      main: '#535c88',
    },
    background: {
      default: '#FFFCF5',
      paper: '#FBF5EA',
    },
    error: {
      main: '#c45e5e',
    },
    warning: {
      main: '#dc9125',
    },
  },
};

const theme = createTheme(themeOptions);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
