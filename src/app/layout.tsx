import { CartProvider } from "@/context/CartContext/CartProvider";

import ThemeProvider from "@/theme";



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="">
        <CartProvider>
          <ThemeProvider>
          {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
