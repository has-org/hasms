import './globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className=' sticky top-0 z-30'>
        <Header />
        </nav>
        
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
