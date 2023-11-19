'use client'
// @mui
import { Box } from '@mui/material';
//
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

// ----------------------------------------------------------------------


export default function MainLayout({children}: {children: React.ReactNode}) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingX: { xs: 0, sm: 0, md: 0 },
        }}
      >
        <Main>
        {children}
        </Main>
      </Box>

      <Footer />
    </Box>
  );
}
