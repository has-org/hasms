import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { NavMenu } from "@/components/NavMenu";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

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

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationMenu = await getNavMenus()

  return (
   
          <section className="mt-20">
            {children}
          </section>

   
  );
}


