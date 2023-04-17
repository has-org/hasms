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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="scroll-smooth">
        <nav className='top-0 z-30'>
          <Header />
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
