import { CartProvider } from "@/context/CartContext/CartProvider";

import Link from "next/link";
import MainLayout from "@/components/layouts/main/MainLayout";
import ThemeProvider from "@/theme";

async function getNavMenus() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`,
      {
        method: "GET",
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationMenus = await getNavMenus();

  return (
    <html lang="en">
      <body className="">
        <CartProvider>
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
