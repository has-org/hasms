"use client";

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

export default function Home() {
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
