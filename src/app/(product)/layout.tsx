import '@/app/(home)/globals.scss'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav className=" sticky top-0 z-30">
          <Header />
        </nav>
        {children}
      </body>
    </html>
  )
}
