"use client";

import { Inter } from "@next/font/google";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import { FIRST_THREE_CATALOGUES, LAST_THREE_CATALOGUES, PRIMARY_CATALOGUES, SECONDARY_CATALOGUES } from "@/mockData/catalogues";
import SearchBox from "@/components/SearchBox";
import { NavMenu } from "@/components/NavMenu";
import { navigationMenu } from "@/mockData/navigationMenu";
import { Cooperators } from '@/mockData/cooperators';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";



const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const SECONDARY_CATALOGUE_VALUE = 3;

export default function Home() {
  return (
    <>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        {/* <SearchBox /> */}
      </section>
      <NavMenu navigationMenu={navigationMenu}></NavMenu>
      <div className="px-2 lg:px-20">

        <div className="primary-container flex my-3">
          <div className="flex-1">
            <Catalogue catalogue={PRIMARY_CATALOGUES[0]} primary />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {
            FIRST_THREE_CATALOGUES.map((catalogue, index) => {
              return (<div className="div" key={index}>
                <Catalogue catalogue={catalogue} />
              </div>)
            })
          }
        </div>
        <div className="secondary-container my-3">
          <div className="flex-1">
            <Catalogue catalogue={PRIMARY_CATALOGUES[1]} primary />
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
          {Cooperators.map((cooperator, index) => {
            // // Duplicate the first and last item for seamless looping
            // if (index === 0 || index === Cooperators.length - 1) {
            //   return (
            //     <div key={index} className="cooperator-wrap relative">
            //       <Link href={`/`}>
            //         <Image
            //           className="logo-img"
            //           alt="Mountains"
            //           src={cooperator.image}
            //           fill
            //           style={{ objectFit: 'contain' }}
            //         />
            //       </Link>
            //     </div>
            //   )
            // }
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
          })}
        </div>
      </section>
    </>

  );
}


            //   return (
            //     <div key={index} className="cooperator-wrap relative">
            //       <Link href={`/`}>
            //         <Image
            //           className="logo-img"
            //           alt="Mountains"
            //           src={cooperator.image}
            //           fill
            //           style={{ objectFit: 'contain' }}
            //         />
            //       </Link>
            //     </div>
            //   )
          // })}