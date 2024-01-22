import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CartProvider } from "@/context/CartContext/CartProvider";
import Header from "@/components/layouts/main/Header";
import Main from "@/components/layouts/main/Main";
import Box from "@mui/system/Box/";
import Footer from "@/components/layouts/main/Footer";
import ThemeProvider from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <AppRouterCacheProvider>
          <CartProvider>
            <ThemeProvider>
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
            </ThemeProvider>
          </CartProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
