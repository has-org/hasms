"use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import SearchBox from "@/components/SearchBox";
import { NavMenu } from "@/components/NavMenu";
import { navigationMenu } from "@/mockData/navigationMenu";
import { CATALOGUES } from "@/mockData/catalogues";
const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="">
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <div className="w-full border-b-4  border-red-800">
        <NavMenu navigationMenu={navigationMenu} />
      </div>
      <div className="px-2 lg:px-20 h-screen">

      <div className="flex flex-col  pt-10">
        <div className="flex pb-2">
          <div className="flex-1">
            <Catalogue primary catalogue={CATALOGUES[0]} />
          </div>
        </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Catalogue catalogue={CATALOGUES[1]} />
            </div>
            <div className="flex-1">
              <Catalogue catalogue={CATALOGUES[2]} />
            </div>
            <div className="flex-1 sm:hidden lg:block">
              <Catalogue catalogue={CATALOGUES[3]} />
            </div>
          </div>
        <div className="flex flex-col pt-10">
          <div className="flex pb-2">
            <div className="flex-1">
              <Catalogue primary catalogue={CATALOGUES[4]} />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Catalogue catalogue={CATALOGUES[5]} />
            </div>
            <div className="flex-1">
              <Catalogue catalogue={CATALOGUES[6]} />
            </div>
            <div className="flex-1 sm:hidden lg:block">
              <Catalogue catalogue={CATALOGUES[7]} />
            </div>
          </div>
        </div>
        </div>

      </div>

    </main>
  );
}
