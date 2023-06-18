
import { Inter } from "next/font/google";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import { NavMenu } from "@/components/NavMenu";
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/UI/Carousel";
import GridCatalogueSection from "@/components/MUI/GridCatalogueSection";
import GridBlogSection from "@/components/MUI/GridBlogSection";
import Iconify from "@/components/UI/iconify";
import HomeNavigation from "@/components/sections/home-navigation";


async function getBlogs() {
  try {
    const res = await fetch(`http://127.0.0.1:3000/blogs`, {
      method: 'GET',
      next: {
        revalidate: 1,
      }
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}

async function getCatalogues() {
  try {
    const res = await fetch(`http://127.0.0.1:3000/catalogues`, {
      method: 'GET',
      next: {
        revalidate: 1,
      }
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}
async function getCooperators() {
  try {
    const res = await fetch(`http://127.0.0.1:3000/cooperators`, {
      method: 'GET',
      next: {
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}

async function getNavMenus() {
  try {
    const res = await fetch(`http://127.0.0.1:3000/navigationMenus`, {
      method: 'GET',
      next: {
        revalidate: 1,
      }
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}



export default async function HomePage() {
  const catalogues: CatalogueType[] = await getCatalogues()
  const categories = catalogues?.filter(catalogue => catalogue.categories?.length! >= 1)
  const cooperators: CooperatorType[] = await getCooperators()
  const navigationMenu = await getNavMenus()
  const blogs = await getBlogs()

  return (
    <>
    <HomeNavigation></HomeNavigation>


      <section className="relative xs:px-3 sm:px-3 md:px-4 lg:px-20 overflow-hidden">
        <GridCatalogueSection catalogues={catalogues} title="Akcije" />
        <GridBlogSection blogs={blogs} title="Blogovi" />
        <GridCatalogueSection catalogues={catalogues} title="Aktuelno" />
        <GridCatalogueSection catalogues={categories} title="Kategorije" />
      </section>

      <section className='cooperation-section'>
        <div className='cooperation-section-content flex'>
          {cooperators?.length >= 1 && cooperators.map((cooperator, index) => {
            return (
              <div key={index} className="cooperator-wrap relative flex">
                {/* <Link href={`/`}> */}
                <Image
                  className="logo-img"
                  alt="Cooperator Logo"
                  src={cooperator?.image ? `${process.env.API_IMG_HOST}${cooperator.image}` : 'https://placehold.co/600x400'}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                {/* </Link> */}
              </div>
            )
          })}
        </div>
      </section>
    </>

  );
}
