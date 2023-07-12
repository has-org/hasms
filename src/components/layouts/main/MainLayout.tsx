'use client'
// @mui
import { Box } from '@mui/material';
//
import Footer from './Footer';
import Header from './Header';
import { usePathname} from 'next/navigation'

// ----------------------------------------------------------------------


export default function MainLayout({children}: {children: React.ReactNode}) {

  const pathname = usePathname();

    const isHome = pathname === '/';

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
