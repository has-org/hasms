import { CartProvider } from "@/context/CartContext/CartProvider";

import MainLayout from "@/components/layouts/main/MainLayout";
import ThemeProvider from "@/theme";
import ShopLayout from "@/components/layouts/shop/ShopLayout";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShopLayout>{children}</ShopLayout>;
}
