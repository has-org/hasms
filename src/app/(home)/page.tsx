
import { Inter } from "@next/font/google";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { NavMenu } from "@/components/NavMenu";


const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


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

async function getCatalogues() {
  try {
    const res = await fetch('http://localhost:8000/admin/catalogues', {
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

export default async function Home() {
  const navigationMenu = await getNavMenus()
  const catalogues = await getCatalogues()
  const PRIMARY_CATALOGUES = catalogues.filter((catalogue: any) => catalogue.primary)
  const FIRST_THREE_CATALOGUES = catalogues.slice(0, 3)
  const LAST_THREE_CATALOGUES = catalogues.slice(3, 6)
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
            <Catalogue catalogue={PRIMARY_CATALOGUES[0]} primary={PRIMARY_CATALOGUES[0]?.primary} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {
            FIRST_THREE_CATALOGUES.map((catalogue: Catalogue, index: number) => {
              return (<div className="div" key={index}>
                <Catalogue catalogue={catalogue} />
              </div>)
            })
          }
        </div>
        <div className="secondary-container my-3">
          <div className="flex-1">
            <Catalogue catalogue={PRIMARY_CATALOGUES[1]} primary={PRIMARY_CATALOGUES[1]?.primary} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {
            LAST_THREE_CATALOGUES.map((catalogue, index) => {
              return (
                <Catalogue catalogue={catalogue} key={index} />
              )
            })
          }
        </div>

      </div>
      <section className='cooperation-section'>
        <div className='cooperation-section-content'>
          {/* {Cooperators.map((cooperator, index) => {
            return (
              <div key={index} className="cooperator-wrap relative">
                <Link href={`/`}>
                  <Image
                    className="logo-img"
                    alt="Mountains"
                    src={cooperator.image}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </div>
            )
          })} */}
        </div>
      </section>
    </>

  );
}
