'use client'
// @mui
import { Box } from '@mui/material';
//
import Footer from './Footer';
import Header from './Header';

// ----------------------------------------------------------------------


export default function MainLayout({children}: {children: React.ReactNode}) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingX: { xs: 0, sm: 2, md: 3 },
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
