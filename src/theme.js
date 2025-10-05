import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954' // spotify-ish neon green
    },
    secondary: {
      main: '#7b61ff' // purple accent
    },
    background: {
      default: '#0b0f14',
      paper: '#071019'
    }
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Montserrat", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none'
        }
      }
    }
  }
});

export default theme;
