import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#028802',
      light: '#16a316',
      dark: '#016b01',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#69e869',
      light: '#8ef08e',
      dark: '#35cf35',
      contrastText: '#0b2f0b'
    },
    success: {
      main: '#0ea5a4'
    },
    background: {
      default: '#f6f8ff',
      paper: '#ffffff'
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b'
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 700, letterSpacing: '-0.01em' },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: {
      textTransform: 'none',
      fontWeight: 700
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(circle at 15% 0%, #dcfce7 0%, #f6fff6 35%, #f6fff6 100%)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 20,
          minHeight: 46,
          boxShadow: 'none'
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #028802 0%, #16a316 100%)',
          boxShadow: '0 12px 24px -8px rgba(2, 136, 2, 0.45)',
          '&:hover': {
            background: 'linear-gradient(135deg, #016b01 0%, #0f8f0f 100%)',
            boxShadow: '0 14px 28px -8px rgba(2, 136, 2, 0.5)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
          border: '1px solid #e2e8f0',
          boxShadow: '0 18px 40px -20px rgba(15, 23, 42, 0.35)'
        }
      }
    }
  }
});

export default muiTheme;
