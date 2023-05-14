
import './globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

async function getNavMenus() {
  try {
    const res = await fetch('http://localhost:8000/navigationMenus', {
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
        <nav className='top-0 z-30'>
          <Header navigationMenu={navigationMenus} />
        </nav>
        <main className="scroll-smooth">
          {children}
        </main>
        <footer className='mt-20'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
