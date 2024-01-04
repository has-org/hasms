import { CartProvider } from "@/context/CartContext/CartProvider";

import MainLayout from "@/components/layouts/main/MainLayout";
import ThemeProvider from "@/theme";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
