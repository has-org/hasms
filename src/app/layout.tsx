import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CartProvider } from "@/context/CartContext/CartProvider";
import Header from "@/components/layouts/main/Header";
import Main from "@/components/layouts/main/Main";
import Box from "@mui/system/Box/";
import Footer from "@/components/layouts/main/Footer";
import ThemeProvider from "@/theme";
import Alert from '@mui/material/Alert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
          <ToastContainer />
            <CartProvider>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 1,
                    backgroundColor: 'background.default',
                  }}
                >
                  <Header />

                  <Box
                    component='main'
                    sx={{
                      flexGrow: 1,
                      paddingX: { xs: 0, sm: 0, md: 0 },
                    }}
                  >
                    <Main>
                      <Alert severity='error'>
                        Stranica je trenutno u izradi! Neke opcije su limitirane
                        ili onemogucene!
                      </Alert>
                      {children}
                    </Main>
                  </Box>

                  <Footer />
                </Box>
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
