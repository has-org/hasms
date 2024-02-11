import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CartProvider } from "@/context/CartContext/CartProvider";
import Header from "@/components/layouts/main/Header";
import Main from "@/components/layouts/main/Main";
import Box from "@mui/system/Box/";
import Footer from "@/components/layouts/main/Footer";
import ThemeProvider from "@/theme";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider >
          <ThemeProvider>
            <CartProvider>
              <SnackbarProvider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 1,
                  backgroundColor: "background.default",
                }}
              >
                <Header />

                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    paddingX: { xs: 0, sm: 0, md: 0 },
                  }}
                >
                  <Main>{children}</Main>
                </Box>

                <Footer />
              </Box>
              </SnackbarProvider>
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
