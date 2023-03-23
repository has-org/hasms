import "@/app/(home)/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
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
export default async function ShopLayout({
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
        <nav className="sticky top-0 z-30">
          <Header navigationMenu={navigationMenu} />
        </nav>

        <div className="sidebar hidden lg:flex lg:absolute lg:left-20 w-40 justify-center h-full">

          <ul>
            <h2>
              Brendovi
            </h2>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <p>Velicine</p>
            <li>XL</li>
            <li>XXL</li>
            <li>L</li>
            <li>M</li>
            <li>X</li>
            <p>Tagovi</p>
            <li>M</li>
            <li>X</li>
            <li>M</li>
            <li>X</li>
            <li>M</li>
            <li>X</li>
            <p>Boje</p>
            <li>Crvena</li>
            <li>Crna</li>
          </ul>
        </div>
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
