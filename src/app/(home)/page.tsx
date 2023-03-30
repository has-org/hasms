
import { Inter } from "@next/font/google";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import { NavMenu } from "@/components/NavMenu";
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


async function getNavMenus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`, {
      method: 'GET',
      next: {
        revalidate: 10,
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
        revalidate: 10,
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
        revalidate: 10,
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


export default async function Home() {
  const navigationMenu = await getNavMenus()
  const catalogues: CatalogueType[] = await getCatalogues()
  const cooperators: CooperatorType[] = await getCooperators()
  const blogs = catalogues?.filter((catalogue: CatalogueType) => catalogue.type === 'blog')
  const PRIMARY_CATALOGUES = catalogues?.filter((catalogue: CatalogueType) => catalogue.primary)
  const FIRST_THREE_CATALOGUES = catalogues?.slice(0, 3)
  const PRIMARY_BLOGS = blogs?.filter((blog: any) => blog.primary)
  const FIRST_THREE_BLOGS = blogs?.slice(0, 3)
  return (
    <>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      </section>
      <div className="navigation-bar-container flex justify-center">
        <NavMenu navigationMenu={navigationMenu} />
      </div>
      <div className="px-2 lg:px-60">

        <div className="primary-container flex my-3">
          <div className="flex-1">
            {PRIMARY_CATALOGUES && <Catalogue catalogue={PRIMARY_CATALOGUES[0]} primary />
            }          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {FIRST_THREE_CATALOGUES &&
            FIRST_THREE_CATALOGUES.map((catalogue: CatalogueType, index: number) => {
              return (
                <div className="div" key={index}>
                  <Catalogue catalogue={catalogue} />
                </div>
              )
            })
          }
        </div>
        <div className="secondary-container my-3">
          <div className="flex-1">
            {PRIMARY_BLOGS && <Catalogue catalogue={PRIMARY_BLOGS[0]} primary />
            }          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {FIRST_THREE_BLOGS &&
            FIRST_THREE_BLOGS.map((catalogue, index) => {
              return (
                <Catalogue catalogue={catalogue} key={index} />
              )
            })
          }
        </div>

      </div>
      <section className='cooperation-section'>
        <div className='cooperation-section-content'>
          {cooperators.length > 1 && cooperators.map((cooperator, index) => {
            return (
              <div key={index} className="cooperator-wrap relative">
                <Link href={`/`}>
                  <Image
                    className="logo-img"
                    alt="Cooperator Logo"
                    src={cooperator?.image ? `${process.env.API_IMG_HOST}${cooperator.image}` : 'https://placehold.co/600x400'}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </>

  );
}
