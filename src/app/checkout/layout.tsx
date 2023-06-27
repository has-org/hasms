import Header from "@/components/Header";
import Footer from "@/components/Footer";


import { NavMenu } from "@/components/NavMenu";

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

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationMenu = await getNavMenus()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
          <nav className='sticky top-0 z-30'>
            <Header sticky navigationMenu={navigationMenu} />
          </nav>
          <main className="mt-20">
            {children}
          </main>

        <footer className="mt-20">
          <Footer />
        </footer>

      </body>
    </html>
  );
}


