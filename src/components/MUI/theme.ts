import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    text: {
      primary: '#0d0d0c',
      secondary: '#1a1816',
    }
  }
})

// // Create a theme instance.
// const Theme = createTheme({
//   palette: {
//     background: {
//       paper: '#fff',
//     },
//     text: {
//       primary: '#173A5E',
//       secondary: '#46505A',
//     },
//     action: {
//       active: '#001E3C',
//     },
//     error: {
//       main: red.A400,
//     },
//     success: {
//       main: '#009688',
//     },
//   },
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },
// });
