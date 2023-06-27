
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from "@/hooks/CartContext/CartProvider";

import Link from 'next/link';


async function getNavMenus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`, {
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigationMenus = await getNavMenus()

  return (
    <html lang="en">
      <body className="scroll-smooth">
        <CartProvider>
          <nav className='top-0 z-30'>
            <Header navigationMenu={navigationMenus} sticky />
          </nav>
          <main className="scroll-smooth">
            {children}
          </main>
          <footer className='mt-20'>
            <Footer />
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
