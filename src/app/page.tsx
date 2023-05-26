
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


async function getBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blogs`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogues`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cooperators`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`, {
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
  const data: CatalogueType[] = await getCatalogues()
  const cooperators: CooperatorType[] = await getCooperators()
  const catalogues = data?.filter((catalogue) => catalogue.type == 'catalogue')
  const categories = data?.filter((catalogue) => catalogue.type == 'category')
  const navigationMenu = await getNavMenus()
  const blogs = await getBlogs()
  return (
    <>
      <div className="home-front">
        <div className="h-[100vh] w-full flex justify-center items-center">
          <Image
            className="cover-img"
            alt="Cooperator Logo"
            src={'/cover_front.jpg'}
            width={2400}
            height={2400}
            style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
          />
          <div className="flex flex-col gap-10 bg-teal-200	bg-opacity-50">

            <div className="flex gap-10">
              <Iconify icon="ph:motorcycle" color="white" width={52} height={52} />
              <Iconify icon="tabler:helmet" color="white" width={52} height={52} />
              <Iconify icon="mingcute:coat-line" color="white" width={52} height={52} />
            </div>
            <div className="flex gap-10">
              <Iconify icon="bi:person-gear" color="white" width={52} height={52} />
              <Iconify icon="tabler:speedboat" color="white" width={52} height={52} />
              <Iconify icon="heroicons:wrench-screwdriver" color="white" width={52} height={52} />
            </div>

          </div>


        </div>
      </div>

      {/* <section className="carousel overflow-hidden">
        <Carousel />
      </section> */}

      <section className="navigation-bar-container">
        {/* <NavMenu navigationMenu={navigationMenu} />  */}
      </section>

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
