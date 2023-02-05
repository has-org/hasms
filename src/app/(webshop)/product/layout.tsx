import Header from "@/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <nav>
          <Header />
        </nav>
      <body>{children}</body>
    </html>
  )
}
