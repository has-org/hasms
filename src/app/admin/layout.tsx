import "@/app/(home)/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default async function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="sticky top-0 z-30">
          <Header />
        </nav>

        <div className="mx-10 lg:ml-80 lg:mr-9">
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
