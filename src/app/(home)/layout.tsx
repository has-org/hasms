import MainLayout from "@/components/layouts/main/MainLayout";
import { CartProvider } from "@/context/CartContext/CartProvider";




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
